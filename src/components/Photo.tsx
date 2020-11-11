import * as React from 'react';
import { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { Field, FormikErrors, useFormikContext } from 'formik';
import { uploadPhoto, setPreviewImages } from "../reducers/product";
import apiUrl from "../apiUrl";
import { preveiwImageType, ProductType } from '../types/types';
import { idText } from 'typescript';

type ResponseImageType = {
    name: string,
    "original-name": string,
    error?: string,
}

export const Photo: React.FC = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { setValues, setFieldValue, values, touched, setFieldError } = useFormikContext<ProductType>();
    const errors: FormikErrors<any> = useFormikContext().errors;
    const fileRef = React.useRef<HTMLInputElement | null>();
    const [files, setFiles] = useState<ArrayLike<File>>();
    const [replace, setReplace] = useState<boolean | { name: string, id: string }>(false);
    const [images, setImages] = useState<Array<{ file: File | null, id: string }>>([{ file: null, id: '' }]);
    const initialPreview = {
        preview: '',
        id: '',
        fileName: '',
        rotate: 0,
    }
    const [previews, setPreviews] = useState<Array<preveiwImageType>>([initialPreview]);

    const handleClickUpload = (e:React.ChangeEvent<HTMLInputElement>): void => {
        if (e.target && e.target.files) setFiles(e.target.files);
    }

    const handleClickRemove = (e:React.MouseEvent<HTMLButtonElement>, id?: string): void => {
        if (id) setImages(images.filter((image) => image.id !== id));
    }

    const handleClickReplace = (e:React.ChangeEvent<HTMLInputElement>, name: string, id: string): void => {
        if (e.target && e.target.files && Array.from(e.target.files).length > 0) setFiles([e.target.files[0]]);
        setReplace({ name, id });
    }

    const handleClickRotate = (e:React.MouseEvent<HTMLButtonElement>, id?: string) => {
        if (id) {      
            const newArr = previews.map((image: preveiwImageType) => {
                if (image.id === id) {
                    return {...image, rotate: image.rotate < 270 ? image.rotate + 90 : 0}
                }
                return image;
            })
            setPreviews(newArr);
        }
    }

    const setUploadError = (errors: string | Array<string>) => {
        if (fileRef && fileRef.current) {
            fileRef.current.blur();
        }
        // // setTouched({ imagePhotos: true });
        if(typeof errors === 'string') {
            setFieldError('photos', errors)
            return;
        };
        setFieldError('photos', `${errors.join('\r\n')}`);
    }

    const ImageLoader = (value: File | null) => new Promise((resolve) => {
        if (value instanceof File) {
            const reader = new FileReader();
            reader.onload = () => {
                resolve({ file: reader.result });
            };
            reader.readAsDataURL(value);
        } else {
            resolve(value);
        }
    });

    useEffect(() => {
        if (previews && previews.length > 0) {
            dispatch(setPreviewImages((previews), () => {}));
        }
    }, [previews]);
    
    useEffect(() => {
        const promises: any = [];
        const filesList: Array<preveiwImageType> = [];
        if(images && images.length) {
            images.forEach(({ file, id }) => {
                if (file) {
                    promises.push(
                        ImageLoader(file).then((data: any) => {
                            filesList.push({
                                preview: data.file,
                                id: id,
                                rotate: 0,
                                fileName: file.name,
                            });
                        })
                    )
                }
            });
            Promise.all(promises).then(() => setPreviews([...filesList, initialPreview]));
        }
    }, [images]);

    useEffect(() => {
        if (files) {
            const prepareDataToUpload = () => {
                if(files && files.length) {
                    const formData = new FormData();
                    Array.from(files).forEach((file) => {
                        formData.append(`file[]`, file, file.name);
                    });               
                    return formData;
                }
            }
            const data = prepareDataToUpload();
            if (data) {
                dispatch(uploadPhoto(data, 0, (key, data: Array<ResponseImageType> | string) => {
                    if (typeof data === 'object') {
                        const imagePhotos: Array<{name: string, original: string}> = [];
                        const uploadErrors: Array<string> = [];
                        data.forEach((el: ResponseImageType) => {
                            if(!el.name && el.error) {
                                uploadErrors.push(`${el['original-name']} - ${el.error}`);
                                return uploadErrors;
                            } else {
                                imagePhotos.push({ name: el.name, original: el['original-name'] });
                            }
                            return imagePhotos;
                        })
                        uploadErrors.length > 0 ? setUploadError(uploadErrors) : setUploadError('');
                        if (typeof replace === 'object') {
                            const restFieldPhotos = values.imagePhotos?.filter(p => p.original !== replace.name);
                            if(!uploadErrors || uploadErrors.length === 0) {
                                //@ts-ignore
                                setFieldValue('imagePhotos', [...restFieldPhotos, ...imagePhotos]);
                                const foundPreviewIndex = images.findIndex(image => image.id === replace.id);
                                images.splice(foundPreviewIndex, 1, { file: Array.from(files)[0], id: uuidv4() });
                                setImages([...images]);
                            }
                            return;
                        }
                        setValues({
                            ...(values as object),
                            imagePhotos,
                        });
                        if((images.length + Array.from(files).length) > 6) {
                            setUploadError(t('You can add a minimum of 1 image and a maximum of 5.'));
                            return;
                        }
                        if (images.length <= 5) {
                            setImages(Array.from(files)
                                .filter(f => imagePhotos.findIndex(image => image.original === f.name) >= 0)
                                .map(file => ({ file, id: uuidv4() }))
                                //@ts-ignore
                                .concat(images)
                            );
                        }
                        return;
                    }
                    setUploadError(data);
                }));
            }
        }
    }, [files]);

    return (
        <div className="create_product__category">
            <div className="category_number">
                <div className="number mobile_hide active">4</div>
                {/*<div className="count_done">Заповнено 4/5</div>*/}
            </div>
            <div className="category_title">{t('Add a photo *')}</div>
            <div className="category_label">{t('You can add a minimum of 1 image and a maximum of 5.')}</div>
            {//@ts-ignore
            touched.photos && (errors.photos || errors.replace) && <div className="msg_err__container">
                <span className="msg_err">{ errors.replace || errors.photos }</span>
            </div>}
            <div className="inputs-block">
                {previews.map(({ preview, id, fileName, rotate }, indx) => (
                    <div className={`input-wrap ${indx >= 5 ? 'hidden' : ''}`} key={indx}>
                        <div className="block-photo__edit">
                            <button
                                type={'button'}
                                className={`delete ${!preview ? "disabled" : ""}`} 
                                onClick={(e) => handleClickRemove(e, id)}>
                                <img src={apiUrl + "/assets/img/del.svg"} alt={t('Delete')} />
                            </button>
                            <label 
                                htmlFor={`replace-${id}`}
                                className={`btn-dark ${!preview ? "disabled" : ""}`}>{t('Replace')}
                                <Field
                                    type="file"
                                    name={`replace[${id}]`}
                                    innerRef={fileRef}
                                    previewId={id}
                                    accept=".jpg, .jpeg, .png, .webp"
                                    id={`replace-${id}`}
                                    validate={setUploadError}
                                    multiple={false}
                                    onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleClickReplace(e, fileName, id)}
                                />   
                            </label>
                            <button 
                                type={'button'}
                                disabled={!preview}
                                className={`rotate ${!preview ? "disabled" : ""}`} 
                                onClick={(e) => handleClickRotate(e, id)}>
                                <img src={apiUrl + "/assets/img/rotate.svg"} alt={t('Rotate')} />
                            </button>
                        </div>
                        <div className="input">
                            {preview &&
                            <div className="preview"><img
                                src={preview as string}
                                className={`rotate-${rotate}`}
                                alt=""                                
                            /></div>}
                            {!preview && <>
                                <Field
                                    type="file"
                                    name="photos"
                                    innerRef={fileRef}
                                    accept=".jpg, .jpeg, .png, .webp"
                                    id="photos"
                                    validate={setUploadError}
                                    multiple={true}
                                    onChange={handleClickUpload}
                                />
                                <label className="text" htmlFor="photos">
                                    <span>{t('Click to download')}</span>
                                    <img src={apiUrl + "/assets/img/upload_icon_1.svg"} alt=""/>
                                </label>
                            </>}
                        </div>                        
                    </div>
                ))}
            </div>
            <div className="category_steps">
                <div className="wrap__category_back">
                    <button type="button" className="category_back btn-light">{t('Back')}</button>
                </div>
                <div className="wrap__category_next">
                    <button type="button" className="category_next">{t('Next')}</button>
                </div>
            </div>
        </div>
    );
};
