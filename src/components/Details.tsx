import * as React from 'react';
import {CategoryParamsOptionsType, CategoryType, ProductType} from "../types/types";
import {useSelector} from "react-redux";
import {AppStateType} from "../store";
import {ErrorMessage, FieldArray, useFormikContext} from "formik";
import {useTranslation} from "react-i18next";
import {Select} from "./Common/FormElements/Select";
import {Color} from "./Common/FormElements/Color";
import apiUrl from "../apiUrl";
import {useState} from "react";
import {Text} from "./Common/FormElements/Text";

type PropsType = {
    product: ProductType
}

export const Details: React.FC<PropsType> = (props) => {
    const { t } = useTranslation();
    const { errors } = useFormikContext();

    let product = props.product;

    const [newBrandAdding, setNewBrandAdding] = useState(false);

    const fields: CategoryParamsOptionsType = useSelector((state: AppStateType) => state.categorizedForm.categoryParamOptions);

    const brandToggle = () => {
        setNewBrandAdding(!newBrandAdding);
    }

    if (fields) {
        const filters = fields.filters.map((filter: any, i: number) => {
            if (filter.name) {
                return <Select key={i} title={filter.name} placeholder={'Почніть вводити'}
                               id={filter.slug} name={`filters[${filter.slug}]`} options={filter.options} />
            }
        });
        return <>
            <div className="category_title">{t('Add more product details')}</div>
            <div className="category_label">
                {t('The more information is filled in, the easier it is for the buyer to make a purchase decision')}
            </div>
            <div className="brand_input">
                <Select id={'brand'} name={'brand'} title={t('Brand *')} placeholder={t('Start typing')}
                        disabled={newBrandAdding} options={fields.brands} />
                <div className="no_brand" onClick={brandToggle}>
                    {(newBrandAdding)?t('Choose a brand from the list'):t('Brand not on the list?')}
                </div>
            </div>
            {(newBrandAdding) && <div className="add_brand_input">
                 <Text id={'add_brand'} name={'add_brand'} title={t('New Brand *')} placeholder={t('Start typing')} />
            </div>}
            <Select title={t('In what condition is the goods? *')} placeholder={t('Start typing')}
                    id={'condition'} name={'condition'} options={fields.conditions} />
            {//@ts-ignore
                <Color errors={errors.color} title={t('Specify the color of the product *')} name={'color'} options={fields.colors} />
            }
            <Select title={t('At what age is the product suitable?')} placeholder={t('Start typing')}
                    id={'year'} name={'year'} options={fields.years} />
            <Select title={t('What height is the product suitable for?')} placeholder={t('Start typing')}
                    id={'height'} name={'height'} options={fields.heights} />
            <Select title={t('What is the size of the product?')} placeholder={t('Start typing')}
                    id={'size'} name={'size'} options={fields.sizes} />
            {filters}
            <div className="category_steps">
                <div className="wrap__category_back">
                    <button type="button" className="category_back btn-light">{t('Back')}</button>
                </div>
                <div className="wrap__category_next">
                    <button type="button" className="category_next">{t('Next')}</button>
                </div>
            </div>
            </>;
    } else {
        return <></>;
    }
}
