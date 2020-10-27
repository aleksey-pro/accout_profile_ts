import * as React from 'react';
import { useState } from 'react';
import {useTranslation} from "react-i18next";
import deleteIcon from "../assets/img/del.svg";
import rotateIcon from "../assets/img/rotate.svg";
import uploadIcon from "../assets/img/upload_icon_1.svg";

type PropsType = {
}

export const Photo: React.FC<PropsType> = (props) => {
    const { t } = useTranslation();
    const [preview, setPreview] = useState();
    const onChangeHandler = (e:React.ChangeEvent) => {
        //@ts-ignore
        const file = e.target.files[0];
        setPreview(file);
    }
    return (
        <div className="create_product__category">
            <div className="category_number">
                <div className="number mobile_hide active">4</div>
                {/*<div className="count_done">Заповнено 4/5</div>*/}
            </div>
            <div className="category_title">{t('Add a photo *')}</div>
            <div className="category_label">{t('You can add a minimum of 1 image and a maximum of 5.')}</div>
            <div className="inputs-block">
                <div className="input-wrap">
                    <div className="block-photo__edit">
                        <button type={'button'} className="delete">
                            <img src={deleteIcon} alt={t('Delete')} />
                        </button>
                        <button type={'button'} className="btn-dark">{t('Replace')}</button>
                        <button type={'button'} className="rotate">
                            <img src={rotateIcon} alt={t('Rotate')} />
                        </button>
                    </div>
                    <div className="input">
                        <input type="file" multiple={true} name="photo" onChange={onChangeHandler}/>
                        <img src="" alt="" className="preview"/>
                        <label className="text">
                            <img src={preview || uploadIcon} alt=""/>
                            <span>{t('Click to download')}</span>
                        </label>
                    </div>
                </div>
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
