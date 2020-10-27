import * as React from 'react';
import { useState, useEffect, useRef, RefObject } from 'react';
import {useTranslation} from "react-i18next";
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
    const [previews, setPreviews] = useState<Array<preveiwImageType>>([{
        preview: '',
        id: '',
        fileName: '',
        rotate: 0,
    }]);
    console.log("Photo:React.FC -> previews", previews)
    // const [inputHeight, setInputHeight] = useState('280px');
    const onUpload = (e:React.ChangeEvent<HTMLInputElement>): void => {
        if (e.target && e.target.files) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (event)  => {
                if (event.target && previews.length <= 5) {
                    setPreviews([{
                        preview: event.target.result,
                        id: `${+new Date()}`,
                        rotate: 0,
                        fileName: file.name
                    }, ...previews]);
                }
            }
        }
    }
    const handleClickRemove = (e:React.MouseEvent<HTMLButtonElement>, id?: string): void => {
        if (id) setPreviews(previews.filter((image) => image.id !== id));
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
            if (id) setPreviews(newArr);
        }
    }
    // useEffect(() => {
    //     if (imgRef.current) {
    //         //@ts-ignore
    //         const style = getComputedStyle(imgRef.current)
    //         setInputHeight(style.height)
    //     }
    // }, [previews]);
    return (
        <div className="create_product__category">
            <div className="category_number">
                <div className="number mobile_hide active">4</div>
                {/*<div className="count_done">Заповнено 4/5</div>*/}
            </div>
            <div className="category_title">{t('Add a photo *')}</div>
            <div className="category_label">{t('You can add a minimum of 1 image and a maximum of 5.')}</div>
            <div className="inputs-block">
                {previews.map((image: preveiwImageType, indx) => (
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
                                    onChange={onUpload}
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
