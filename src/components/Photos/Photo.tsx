import * as React from 'react';
import {PhotoAspectsType} from "../../types/types";
import BlockUi from "react-block-ui";
import {createRef, useState} from "react";
import apiUrl from "../../apiUrl";
import {useTranslation} from "react-i18next";
import {Field, useFormikContext} from 'formik';

type MapPropsType = {
    index: number
    photoAspect: PhotoAspectsType
    photo?: string
}
type DispatchPropsType = {
    uploadPhoto: (formData: FormData, key: number, afterResponseAction: (key:number, value:any) => void) => void
}
type PropsType = MapPropsType & DispatchPropsType;
export const Photo: React.FC<PropsType> = (props) => {
    const { t } = useTranslation();
    const { setFieldValue } = useFormikContext();
    let [isLoading, setIsLoading] = useState(false);

    const onLoadImage = (event: any) => {
        setIsLoading(true);
        const formData = new FormData();
        const file = event.target.files[0];
        formData.append(
            "file",
            file,
            file.name
        );
        props.uploadPhoto(formData, props.index, (key, filename) => {
            setFieldValue(`photos[${key}].name`,  filename);
            setIsLoading(false);
        });
    }
    const onReplace = (event: any) => {
        alert('000----000');
    }
    const onDelete = (event: any) => {
        alert('222000----000');
    }
    const onRotation = (event: any) => {
        setFieldValue(`photos[${props.index}][rotation]`, '90');
        console.log(props);
        /*
        if (rotationRef.val() === '90') {
            previewRef.css({
                'width': 'auto',
                'max-width': '215px',
                'max-height': '300px',
                'transform': 'rotate(180deg)'
            });
            rotationRef.val('180');
        } else if (rotationRef.val() === '180') {
            previewRef.css({
                'width': 'auto',
                'max-width': '300px',
                'max-height': '215px',
                'transform': 'rotate(270deg)'
            });
            rotationRef.val('270');
        } else if (rotationRef.val() === '270') {
            previewRef.css({
                'width': 'auto',
                'max-width': '215px',
                'max-height': '300px',
                'transform': 'rotate(0deg)'
            });
            rotationRef.val('0');
        } else {
            previewRef.css({
                'width': 'auto',
                'max-width': '300px',
                'max-height': '215px',
                'transform': 'rotate(90deg)'
            });
            rotationRef.val('90');
        }*/

    }
    return <BlockUi tag="div" blocking={isLoading}>
        <div className="input-wrap">
            <div className="input">
                <input type="file" onChange={onLoadImage} id={"product_photo_" + props.index}
                       name={"product_photo[" + props.index + ']'} className="js-file-input"/>
                {props.photo && <img className="preview" src={apiUrl + '/assets/img/tmp/' + props.photo} alt=""/>}
                {!props.photo && <label className="text">
                    <img src={apiUrl+"/assets" + props.photoAspect.icon} alt={props.photoAspect.title}/>
                    <div>
                        <span>{t('Download')}</span>mments yet ion this issue
                        <span>{props.photoAspect.title}</span>
                    </div>
                </label>}
                <Field type={'hidden'} name={`photos[${props.index}][name]`} />
                <Field type={'hidden'} name={`photos[${props.index}][rotation]`} />
                {props.photo && <div className="btn-change-wrap show">
                    <button type="button" className="btn-change" onClick={onReplace}>{t('Replace')}</button>
                    <button type="button" className="btn-delete" onClick={onDelete}>{t('Delete')}</button>
                    <button type="button" className="btn-rotation redact" onClick={onRotation}>{t('Rotation')}</button>
                </div>}
            </div>
        </div>
    </BlockUi>
};
