import * as React from 'react';
import {SectionTitle} from "./Common/SectionTitle";
import {Text} from "./Common/FormElements/Text";
import {Textarea} from "./Common/FormElements/Textarea";
import {MainFormFieldsType, ProductType} from "../types/types";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../store";
import {useCallback, useEffect, useState} from "react";
import useDebounce from "../hook/useDebounce";
import {suggestCategoryByName} from "../reducers/product";
import {useTranslation} from "react-i18next";
import FormikOnError from "./FormikOnError/FormikOnError";

type PropsType = {
    product: ProductType
    mainFormFields: MainFormFieldsType
}

export const MainForm: React.FC<PropsType> = (props) => {

    const { t } = useTranslation();
    let product = props.product;
    const dispatch = useDispatch();

    const [searchTerm, setSearchTerm] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [defaultMessage, setDefaultMessage] = useState('');

    const debouncedSearchTerm = useDebounce(searchTerm, 900);
    const getSuggestCategory = useCallback((name: string, afterReturnAction: (wasFound:boolean) => void) => {
        dispatch(suggestCategoryByName(name, afterReturnAction));
    }, [dispatch]);

    useEffect(
        () => {
            setDefaultMessage(t('Enter the name of the product to see the recommended category'));
            if (debouncedSearchTerm && debouncedSearchTerm.length > 4) {
                setIsSearching(true);
                getSuggestCategory(debouncedSearchTerm, (wasFound:boolean) => {
                    setIsSearching(false);
                    if(wasFound){
                        setDefaultMessage('');
                    } else {
                        setDefaultMessage(t('No category found for this product name'));
                    }
                });
            }
        },
        [debouncedSearchTerm]
    );
    return (
        <section className="container create">
            <SectionTitle counter={1} title={t('Describe product')}/>
            <div className="inputs-block">
                <Text settings={props.mainFormFields.title} value={product.title}
                      onChange={(e:any) => setSearchTerm(e.target.value)}
                      message={isSearching?t('Search...'):defaultMessage}/>
            </div>
            <div className="inputs-block">
                <Textarea settings={props.mainFormFields.description} value={product.description}/>
            </div>
        </section>
    );
};
