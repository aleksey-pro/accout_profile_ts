import * as React from 'react';
import { useState } from 'react';
import {useTranslation} from "react-i18next";
import { useFormikContext } from 'formik';
import {TextWithMax} from "./Common/FormElements/TextWithMax";
import {Text} from "./Common/FormElements/Text";
import {Textarea} from "./Common/FormElements/Textarea";
import {Checkbox} from "./Common/FormElements/Checkbox";

type PropsType = {
}

export const Price: React.FC<PropsType> = (props) => {
    const { t } = useTranslation();
    const [priceFree, setPriceFree] = useState(false);
    const { setValues, values } = useFormikContext();
    const freePrice = () => {
        setPriceFree(!priceFree);
        setValues({
            ...(values as object),
            price: '',
            bought_price: '',
            additional_condition: '',
            bargain: false,
            barter: false,
        })
    };

    return (
        <div className="create_product__category">
            <div className="category_number">
                <div className="number mobile_hide active">3</div>
                {/*<div className="count_done">Заповнено 3/5</div>*/}
            </div>
            <div className="category_title ">{t('Price and terms of sale')}</div>
            <div className="category_label">
                {t('The more information is filled in, the easier it is for the buyer to make a decision')}
            </div>
            <div className="price_items">
                <Text title={t('Enter the price of the product *')} id={'price'} name={'price'} placeholder={'0 грн'} required={true} disabled={priceFree}/>
                <Text title={t('How much did you buy the product for?')} id={'bought_price'} name={'bought_price'} placeholder={'0 грн'} required={true} disabled={priceFree}/>
            </div>
            <Textarea title={t('Additional condition of sale')} id={'additional_condition'} name={'additional_condition'}
                      required={true} placeholder={t('For example, I will send only after subscription')} disabled={priceFree} />
            <div className="checkbox_items">
                <Checkbox title={t('Bargaining is possible')} id={'bargain'} name={'bargain'} disabled={priceFree}/>
                <Checkbox title={t('Barter is possible')} id={'barter'} name={'barter'} disabled={priceFree}/>
                <Checkbox title={t('I will give for free')} id={'free'} name={'free'} onClick={freePrice} />
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
