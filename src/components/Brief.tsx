import * as React from 'react';
import {useTranslation} from "react-i18next";
import {Textarea} from "./Common/FormElements/Textarea";
import {Name} from "./Common/FormElements/Name";
import {useCallback, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import useDebounce from "../hook/useDebounce";
import {suggestCategoryByName} from "../reducers/product";

type PropsType = {}

export const Brief: React.FC<PropsType> = (props) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();

    const [searchTerm, setSearchTerm] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [defaultMessage, setDefaultMessage] = useState('');

    const debouncedSearchTerm = useDebounce(searchTerm, 900);

    const getSuggestCategory = useCallback((name: string, afterReturnAction: (wasFound: boolean) => void) => {
        dispatch(suggestCategoryByName(name, afterReturnAction));
    }, [dispatch]);

    useEffect(
        () => {
            setDefaultMessage(t('Enter the name of the product to see the recommended category'));
            if (debouncedSearchTerm && debouncedSearchTerm.length > 4) {
                setIsSearching(true);
                getSuggestCategory(debouncedSearchTerm, (wasFound: boolean) => {
                    setIsSearching(false);
                    if (wasFound) {
                        setDefaultMessage('');
                    } else {
                        setDefaultMessage(t('No category found for this product name'));
                    }
                });
            }
        },
        [debouncedSearchTerm]
    );
    const callback = (callback: () => void) => {
        callback()
    };
    const message= isSearching ? t('Search...') : defaultMessage;
    return <>
        <div className="category_title">{t('Enter product name *')}</div>
        <Name id={'name'} name={'name'} placeholder={t('For example, a green polka dot H&M dress')}
              title={t('The name will appear at the top of your product page')}
              onChange={(e: any) => setSearchTerm(e.target.value)} focusedNameFieldClick={callback}/>
        {message && <span className="max-length">{message}</span>}
        <div className="category_title">{t('Write a short description of the product *')}</div>
        <Textarea id={'description'} name={'description'}
                  placeholder={t('For example, a green polka dot H&M dress for a girl 5-7 years old. New. Knee length')}
                  title={t('The description will help potential buyers find your product faster')}/>
    </>;
}