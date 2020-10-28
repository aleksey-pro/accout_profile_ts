import * as React from 'react';
import { useState, useEffect, useRef, RefObject } from 'react';
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useFormikContext } from 'formik';
import { uploadPhoto } from "../reducers/product";
import deleteIcon from "../assets/img/del.svg";
import rotateIcon from "../assets/img/rotate.svg";
import uploadIcon from "../assets/img/upload_icon_1.svg";

type preveiwImageType = {
    preview: ArrayBuffer | string | null,
    fileName: string,
    rotate?: number,
    id?: string,
}

export const Photo: React.FC = () => {
    const { t } = useTranslation();
    const imgRef = useRef<HTMLImageElement>();
    const dispatch = useDispatch();
    const { setValues, values } = useFormikContext();
    const [files, setFiles] = useState<Array<File>>([]);
    console.log("Photo:React.FC -> files", files)
    const [images, setImages] = useState<Array<File>>([]);
    const initialPreview = {
        preview: '',
        id: '',
        fileName: '',
        rotate: 0,
    }
    const [previews, setPreviews] = useState<Array<preveiwImageType>>([initialPreview]);
    // const [inputHeight, setInputHeight] = useState('280px');

    
    const handleClickUpload = (e:React.ChangeEvent<HTMLInputElement>): void => {
        if (e.target && e.target.files) {
            const files = e.target.files;
            //@ts-ignore
            setFiles(files);
            //@ts-ignore
            setImages([...images, ...files ]);
        }
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
                    //@ts-ignore
                    return {...image, rotate: image.rotate < 270 ? image.rotate + 90 : 0}
                }
                return image;
            })
            setPreviews(newArr);
        }
    }
    
    const ImageLoader = (value: File | null, id: number) => new Promise((resolve) => {
        if (value instanceof File) {
            const reader = new FileReader();
            reader.onload = () => {
                resolve({ file: reader.result, id });
            };
            reader.readAsDataURL(value);
        } else {
            resolve(value);
        }
    });
    
    useEffect(() => {
        const promises: any = [];
        const filesList: any = [];
        if(images && images.length) {
            images.forEach((image) => {
                promises.push(
                    ImageLoader(image, image.lastModified).then((data: any) => {
                        if (previews.length <= 5) {
                            filesList.push({
                                preview: data.file,
                                id: data.id,
                                rotate: 0,
                            });
                        }
                    })
                )
            });
            Promise.all(promises).then(() => setPreviews([...filesList, initialPreview]));
        }
    }, [images]);

    useEffect(() => {
        // if (imgRef.current) {
        //     //@ts-ignore
        //     const style = getComputedStyle(imgRef.current)
        //     setInputHeight(style.height)
        // }
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
        console.log("Photo:React.FC -> data", data)
        if (data) {
            dispatch(uploadPhoto(data, 1, (key, data) => {
                const photos: any = [];
                data.forEach((el: any) => {
                    return photos.push(el.name);
                })
                // data.reduce((acc: any, el: any) => {
                //     return acc.push({name: el.name});
                // }, [])
                setValues({
                    ...(values as object),
                    photos,
                });
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
            <div className="inputs-block">
                {previews.map((image, indx) => (
                    <div className={`input-wrap ${indx >= 5 ? 'hidden' : ''}`} key={image.id}>
                        <div className="block-photo__edit">
                            <button type={'button'} className="delete" onClick={(e) => handleClickRemove(e, image.id)}>
                                <img src={deleteIcon} alt={t('Delete')} />
                            </button>
                            <button type={'button'} className="btn-dark">{t('Replace')}</button>
                            <button type={'button'} className="rotate" onClick={(e) => handleClickRotate(e, image.id)}>
                                <img src={rotateIcon} alt={t('Rotate')} />
                            </button>
                        </div>
                        <div className="input">
                            {image.preview &&
                            <div className="preview"><img
                                ref={imgRef as RefObject<HTMLImageElement>}
                                src={image.preview as string}
                                className={`rotate-${image.rotate}`}
                                alt=""                                
                            /></div>}
                            {!image.preview && <>
                                <input
                                    type="file"
                                    accept=".jpg, .jpeg, .png, .webp"
                                    id="file"
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
