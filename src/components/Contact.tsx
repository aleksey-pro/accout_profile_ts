import * as React from 'react';
import {useTranslation} from "react-i18next";
import { Field } from 'formik';
import deleteIcon from "../assets/img/del.svg";
import rotateIcon from "../assets/img/rotate.svg";
import uploadIcon from "../assets/img/upload_icon_1.svg";
import reload from "../assets/img/reload.svg";
import t_shirt from "../assets/img/tshirt.svg";
import priceTag from "../assets/img/price-tag.svg";
import water from "../assets/img/water.svg";
import {TextWithMax} from "./Common/FormElements/TextWithMax";

type PropsType = {
}

export const Contact: React.FC<PropsType> = (props) => {
    const { t } = useTranslation();

    return (
        <div className="create_product__category">
            <div className="telephone_category">
                <div className="category_number">
                    <div className="number mobile_hide active">5</div>
                    {/*<div className="count_done">Заповнено 5/5</div>*/}
                </div>
                <TextWithMax title={'Вкажіть ціну товару *'} name={'phone'} id={'phone'} mask={'+380 (99) 999 99 99'} maskChar={' '} />
                <div className="checkbox">
                    <Field type="checkbox" id="telephone" name="show_phone"/>
                    <label htmlFor="telephone">Показувати телефон в оголошенні</label>
                </div>
            </div>
            <div className="category_steps">
                <div className="wrap__category_back">
                    <button type="button" className="category_back btn-light">Назад</button>
                </div>
                <div className="wrap__category_next">
                    <button type="button" className="category_next">Далі</button>
                </div>
            </div>
        </div>
    );
};
