import * as React from 'react';
import { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Field, FormikErrors, useFormikContext } from 'formik';
import { uploadPhoto, setPreviewImages } from "../reducers/product";
import deleteIcon from "../assets/img/del.svg";
import rotateIcon from "../assets/img/rotate.svg";
import uploadIcon from "../assets/img/upload_icon_1.svg";
import { preveiwImageType } from '../types/types';

type ResponseImageType = {
    name: string,
    "original-name": string,
    error?: string,
}

export const Photo: React.FC = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { setValues, values } = useFormikContext();
    const errors: FormikErrors<any> = useFormikContext().errors;
    const fileRef = React.useRef<HTMLInputElement | null>();
    const [files, setFiles] = useState<FileList>();
    const [images, setImages] = useState<Array<File>>([]);
    const initialPreview = {
        preview: '',
        id: '',
        fileName: '',
        rotate: 0,
    }
    const [previews, setPreviews] = useState<Array<preveiwImageType>>([initialPreview]);
    const [uploadPhotoError, setuploadPhotoError] = useState<string>();

    const handleClickUpload = (e:React.ChangeEvent<HTMLInputElement>): void => {
        if (e.target && e.target.files) setFiles(e.target.files);
    }
    const handleClickRemove = (e:React.MouseEvent<HTMLButtonElement>, id?: string): void => {
        if (id) {
            setPreviews(previews.filter((image) => image.id !== id));
            setImages(images.filter((image) => image.lastModified !== Number(id)));
        };
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
    const setUploadError = (err: string) => {
        setuploadPhotoError(err);
        if (fileRef && fileRef.current) {
            fileRef.current.blur();
        }
    }

    const ImageLoader = (value: File | null, id: number, name: string) => new Promise((resolve) => {
        if (value instanceof File) {
            const reader = new FileReader();
            reader.onload = () => {
                resolve({ file: reader.result, id, name });
            };
            reader.readAsDataURL(value);
        } else {
            resolve(value);
        }
    });

    useEffect(() => {
        if (previews && previews.length) {
            dispatch(setPreviewImages((previews), () => {}));
        }
    }, [previews]);
    
    useEffect(() => {
        const promises: any = [];
        const filesList: Array<preveiwImageType> = [];
        if(images && images.length) {
            images.forEach((image, idx) => {
                promises.push(
                    ImageLoader(image, image.lastModified, image.name).then((data: any) => {
                        if (previews.length <= 5) {
                            filesList.push({
                                preview: data.file,
                                id: data.id + idx,
                                rotate: 0,
                                fileName: data.name,
                            });
                        }
                    })
                )
            });
            Promise.all(promises).then(() => setPreviews([...filesList, initialPreview]));
        }
    }, [images]);

    useEffect(() => {
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
                const photos: Array<{name: string, original: string}> = [];
                let error = false;
                if (typeof data === 'object') {
                    data.forEach((el: ResponseImageType) => {
                        if(!el.name && el.error) {
                            setUploadError(el.error)
                            error = true;
                            return;
                        }
                        return photos.push({ name: el.name, original: el['original-name'] });
                    })
                    if (!error) {
                        setValues({
                            ...(values as object),
                            photos,
                        });
                        //@ts-ignore
                        setImages([...images, ...files ]);
                    }
                    return;
                }
                setUploadError(data);
            }));
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
            {errors && errors.file && <div className="msg_err__container"><span className="msg_err">{errors.file}</span></div>}                      
            <div className="inputs-block">
                {previews.map((image, indx) => (
                    <div className={`input-wrap ${indx >= 5 ? 'hidden' : ''}`} key={image.id}>
                        <div className="block-photo__edit">
                            <button type={'button'} disabled={!image.preview} className="delete" onClick={(e) => handleClickRemove(e, image.id)}>
                                <img src={deleteIcon} alt={t('Delete')} />
                            </button>
                            <button type={'button'} disabled={!image.preview} className="btn-dark">{t('Replace')}</button>
                            <button 
                                type={'button'}
                                disabled={!image.preview}
                                className="rotate"
                                onClick={(e) => handleClickRotate(e, image.id)}>
                                <img src={rotateIcon} alt={t('Rotate')} />
                            </button>
                        </div>
                        <div className="input">
                            {image.preview &&
                            <div className="preview"><img
                                src={image.preview as string}
                                className={`rotate-${image.rotate}`}
                                alt=""                                
                            /></div>}
                            {!image.preview && <>
                                <Field
                                    type="file"
                                    name="file"
                                    innerRef={fileRef}
                                    // accept=".jpg, .jpeg, .png, .webp"
                                    id="file"
                                    validate={() => uploadPhotoError}
                                    multiple={true}
                                    onChange={handleClickUpload}
                                />
                                <label className="text" htmlFor="file">
                                    <span>{t('Click to download')}</span>
                                    <img src={uploadIcon} alt=""/>
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
