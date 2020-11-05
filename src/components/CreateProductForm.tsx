import * as React from 'react';
import { CategoryParamsOptionsType, ProductType, SuggestCategoryType, previewType } from "../types/types";
import { Formik, Form} from 'formik';
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "../store";
import * as Yup from 'yup';
import { useTranslation } from "react-i18next";
import "../i18next/translate";
import { saveProduct } from "../reducers/product";
import FormikOnError from "./FormikOnError/FormikOnError";
import { useEffect, useState } from "react";
import { initData } from "../reducers/main-form-fields";
import { Rubricator } from "./Rubricator/Rubricator";
import { Details } from "./Details";
import { Header } from "./Header";
import { Brief } from "./Brief";
import { Price } from "./Price";
import { Photo } from "./Photo";

import {Contact} from "./Contact";

export const CreateProductForm: React.FC<ProductType> = (props) => {
    const { t } = useTranslation();
    const [wasLoaded, setWasLoaded] = useState(false);
    //@ts-ignore
    const product: ProductType = useSelector((state: AppStateType) => state.product.productData);
    const categoryParamOptions: CategoryParamsOptionsType = useSelector((state: AppStateType) => state.categorizedForm.categoryParamOptions);
    //@ts-ignore
    const previewsFromStorage: Array<previewType> = useSelector((state: AppStateType) => state.product.previews);
    
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(initData(()=> {
            setWasLoaded(true);
        }));
    }, [dispatch]);
    
    
    const onSubmit = (values: ProductType) => {
        if (values) {
            const formData = new FormData();
            for (let key in values) {
                if (values.hasOwnProperty(key)) {
                    if (key === 'imagePhotos') {
                        let photos = values[key];
                        const resultPhotos: Array<previewType> = [];
                        photos && photos.forEach((photo: {name: string, original: string}) => {
                            const idx = previewsFromStorage.findIndex((p) => p.name === photo.original);
                            if (idx >= 0) {
                                resultPhotos.push({
                                    name: photo.name,
                                    rotate: previewsFromStorage[idx].rotate,
                                })
                            }
                        });
                        if (resultPhotos.length) {
                            resultPhotos.forEach((photo: previewType, i: number) => {
                                formData.append('photos[' + i + '][name]', photo.name);
                                formData.append('photos[' + i + '][rotation]', `${photo.rotate}`);                    
                            });
                        }

                    } else if (key === 'filters') {
                        let filters = values[key];
                        for (const filterName in filters) {
                            //@ts-ignore
                            formData.append(`filters[${filterName}]`, filters[filterName])
                        }
                    }
                    else {
                        //@ts-ignore
                        formData.append(key, values[key]);
                    }
                }
            }
            if(categoryParamOptions.slug) {
                formData.append('category_slug', categoryParamOptions.slug);
            }
            dispatch(saveProduct(formData, (data) => {
                if(data.success){
                    document.location.href = data.success;
                }
            }));
        }
    }

    if(!wasLoaded) {
        return <div className={'container create'}>Загрузка...</div>;
    }

    return <Formik
        initialValues={{}}
        validationSchema={() => {
            return Yup.object().shape({
                title: Yup.string()
                    .min(4, t("min", {min: 4}))
                    .max(256, t("max", {max: 256}))
                    .required(t('required')),
                description: Yup.string()
                    .min(10, t("min", {min: 10}))
                    .max(256, t("max", {max: 255}))
                    .required(t('required')),
                brand: Yup.string()
                    .when('add_brand', function (this: any, value:any){
                        if(!value) return this.required(t('required'))
                    }),
                condition: Yup.string()
                    .required(t('required')),
                color: Yup.string()
                    .required(t('required')),
                price_current: Yup.number()
                    .typeError(t('number'))
                    .max(999999, t("numberMax"))
                    .required(t('required')),
                price_origin: Yup.number()
                    .typeError(t('number'))
                    .when(
                        ["price_current"],
                        (price_current: number, schema: any) => {
                            return !!price_current
                            ? schema.moreThan(
                                price_current,
                                t("numberMin")
                                )
                                : schema;
                            }
                            ),
                photos: Yup.array()
                    .required(t('required')),
                phone: Yup.string()
                    .required(t('required')),    
            })
        }}
        onSubmit={onSubmit}
    >
        {({values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit}) => {
           return <Form className="form" onSubmit={handleSubmit}>
                <FormikOnError>
                    <Header />
                    <div className="create_product__category" >
                        <div className="category_number">
                            <div className="number mobile_hide active">1</div>
                        </div>
                        <Brief/>
                        <div className="category_steps">
                            <button type="button" className="category_next done">{t('Next')}</button>
                        </div>
                    </div>
                    <div className="create_product__category">
                        <div className="category_number">
                            <div className="number mobile_hide active">2</div>
                        </div>
                        <div className="category_title">{t('To which category should your product be classified? *')}</div>
                        <div className="category_label">{t('Properly specified category will help sell the product faster')}</div>
                        <div className="categories-items__title">
                            <button type={'button'} onClick={()=>{const name = document.getElementById("name");
                            (name !== null) && name.focus();}}>{t('Enter a name')}</button>
                            {t('product above, and the suggested categories will appear here')}:
                        </div>

                        <Rubricator/>
                        <Details product={product}/>
                    </div>
                    {categoryParamOptions &&
                        <>
                            <Price/>
                            <Photo/>
                            <Contact/>
                            <div className="btn_block">
                                <button type="submit" className="btn-dark">{t('Create an ad')}</button>
                                <button type="button" className="btn-light">{t('Save the draft')}</button>
                            </div>
                        </>
                    }
                </FormikOnError>
            </Form>
        }}
    </Formik>
}

export default CreateProductForm;