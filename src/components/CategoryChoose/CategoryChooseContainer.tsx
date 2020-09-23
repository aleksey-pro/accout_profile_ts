import * as React from 'react';
import {CategoryChoose} from "./CategoryChoose";
import {AppStateType} from "../../store";
import {useDispatch, useSelector} from "react-redux";
import {useCallback, useEffect, useState} from "react";
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';
import {actions, getCategorizedFormBySlug} from "../../reducers/categorized-form-fields";
import {Field, useFormikContext} from "formik";

type PropsType = {};

export const CategoryChooseContainer: React.FC<PropsType> = () => {
    const categories = useSelector((state: AppStateType) => state.mainForm.categories);
    const selectedSuggestCategory: string[] = useSelector((state: AppStateType) => state.product.selectedSuggestCategory);
    const { setFieldValue } = useFormikContext();

    let [currentCategories, setCurrentCategories] = useState(categories);
    let [isChecking, setIsChecking] = useState(false);
    let [selectedCategoryList, setSelectedCategoryList] = useState([{'slug': 'main', 'title': 'Начало'}]);

    const dispatch = useDispatch();

    const categorizedForm = useCallback((slug: string, afterReturnAction: (token?: string) => void) => {
        dispatch(getCategorizedFormBySlug(slug, afterReturnAction));
    }, [dispatch]);

    const cleanChangeSelectedCategory = useCallback(() => {
        dispatch(actions.cleanCategorizedFormFields())
    }, [dispatch]);

    const onSelectCategory = (slug: string) => {
        cleanChangeSelectedCategory();
        if (currentCategories) {
            let list = currentCategories.filter((item:any) => item.slug === slug).shift();
            if (list) {
                selectedCategoryList.push({'slug': slug, 'title': list.title});
                setSelectedCategoryList(selectedCategoryList);

                if (list.children) {
                    setCurrentCategories(list.children);
                } else {
                    setCurrentCategories([]);
                    setIsChecking(true);
                    categorizedForm(slug, (token?: string) => {
                        setIsChecking(false);
                        setFieldValue('slug', slug);
                        if(token) setFieldValue('_token', token);
                    });
                }
            }
        }
    }

    const onGoBackByCategory = (slug: string) => {
        cleanChangeSelectedCategory();
        if (categories !== undefined) {
            let newSelectedCategoryList: any = [];
            if (slug === 'main') {
                setSelectedCategoryList([{'slug': 'main', 'title': 'Начало'}]);
                setCurrentCategories(categories);
            } else {
                let selectedCategories = categories;
                for (let i in selectedCategoryList) {
                    let category = selectedCategoryList[i];
                    newSelectedCategoryList.push(category);
                    let list = selectedCategories.filter((item:any) => item.slug === category.slug).shift();
                    if (list !== undefined && list.children) {
                        selectedCategories = list.children;
                    }
                    if (category.slug === slug) {
                        setCurrentCategories(selectedCategories);
                        setSelectedCategoryList(newSelectedCategoryList);
                        return;
                    }
                }
            }
        }
    }

    const selectSuggestCategory = (selected: string[], count: number) => {
        if(currentCategories?.length && !isChecking) {
            count++
            const selectedCategories = currentCategories?.filter(((item:any) => {
                let key = (item.slugs) ? selected.indexOf(item.slugs[0]) : selected.indexOf(item.slug);
                if (key !== -1) {
                    delete selected[key];
                    return true;
                }
                return false;
            }));
            if (selectedCategories?.length) {
                onSelectCategory(selectedCategories[0].slug);
            }
            if (selected.length && count < 6) {
                selectSuggestCategory(selected, count);
            }
        }
    }

    useEffect(() => {
        if(selectedSuggestCategory.length && currentCategories?.length && !isChecking){
            const selected = [...selectedSuggestCategory];
            selectSuggestCategory(selected, 0);
        }
    });
    const HiddenInputComponent = (props:any) => (
        <input type="hidden" {...props} />
    );
    return (
        <>
            {currentCategories &&
            <BlockUi tag="div" blocking={isChecking}>
                <Field as={HiddenInputComponent} name={'_token'} />
                <Field as={HiddenInputComponent} name={'slug'} />
                <CategoryChoose categories={currentCategories} onSelectCategory={onSelectCategory}
                                selectedCategoryList={selectedCategoryList} goBackByCategory={onGoBackByCategory}/>
            </BlockUi>}
        </>
    );
}