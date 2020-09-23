import * as React from 'react';
import {PhotoAspectsType} from "../../types/types";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../store";
import {useCallback} from "react";
import {uploadPhoto} from "../../reducers/product";
import {Photo} from "./Photo";
import {FieldArray} from "formik";

type PropsType = {};

export const Photos: React.FC<PropsType> = (props: PropsType) => {

    const photoAspects = useSelector((state: AppStateType) => state.categorizedForm.categorizedFormFields.photos.photoAspects);
    const initPhotos = useSelector((state: AppStateType) => state.product.productData.photos);

    const dispatch = useDispatch();
    let photos = (initPhotos) ? initPhotos : [];
    let count = 0;

    const uploadPhotoAction = useCallback((formData: FormData, key: number, afterReturnAction: (key:number, value:any) => void) => {
        dispatch(uploadPhoto(formData, key, afterReturnAction));
    }, [dispatch]);

    photoAspects.map((data: PhotoAspectsType, i: number) => {
        if (photos && photos[i]) {
            count++;
        }
        return false;
    });
    return <div className="create_product_header upload-img ">
        <div className="subtitle">
            <h3><span>{count}</span> из 5 загружено</h3>
        </div>
        <div className="panel">
            Первое фото станет обложкой карточки товара.
        </div>
        <FieldArray name="photos" render={ () => (
            <div className="inputs-block">
                {photoAspects && photoAspects.length > 0 &&
                photoAspects.map((value:any, index:any) => (
                    <Photo key={index} index={index} photoAspect={value} uploadPhoto={uploadPhotoAction} photo={photos[index]}/>
                ))}
            </div>
        )} />
    </div>
};
