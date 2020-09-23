import * as React from 'react';
import {CategorizedFormFieldsType, ProductType} from "../../types/types";
import {Text} from "../Common/FormElements/Text";
import {Select} from "../Common/FormElements/Select";
import {useState} from "react";
import {useTranslation} from "react-i18next";

type PropsType = {
    categorizedFormFields: CategorizedFormFieldsType
    product: ProductType
}
export const BrandAndCondition: React.FC<PropsType> = (props) => {
    const {t} = useTranslation();
    const [newBrandAdding, setNewBrandAdding] = useState(false);
    const brandToggle = () => {
        setNewBrandAdding(!newBrandAdding);
    }

    return <div className="inputs-block">
        <div className="left">
            <Select disabled={newBrandAdding} settings={props.categorizedFormFields.brand} value={props.product.brand} />
            {(newBrandAdding && props.categorizedFormFields.add_brand) && <Text settings={props.categorizedFormFields.add_brand} value={props.product.add_brand}/>}
        </div>
        <div className="center">
            <button type={"button"} className="btn-dark add-brand-toggle" onClick={brandToggle}>
                {(newBrandAdding)?t('Choose a brand from the list'):t('Add new brand')}</button>
        </div>
        <div className="right">
            <Select settings={props.categorizedFormFields.condition} value={props.product.condition} />
        </div>
    </div>
};
