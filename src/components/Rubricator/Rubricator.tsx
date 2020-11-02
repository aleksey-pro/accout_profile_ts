import * as React from 'react';
import 'react-block-ui/style.css';
import {useDispatch, useSelector} from "react-redux";
import { Field } from "formik";
import {AppStateType} from "../../store";
import {useCallback, useState} from "react";
import BlockUi from "react-block-ui";
import {CategoryType, SuggestCategoryType} from "../../types/types";
import apiUrl from "../../apiUrl";
import {actions, getCategorizedFormBySlug} from "../../reducers/categorized-form-fields";
import {useTranslation} from "react-i18next";
import {SelectedCategory} from "./SelectedCategory";

type PropsType = {};

export const Rubricator: React.FC<PropsType> = () => {
    const {t} = useTranslation();

    const categories = useSelector((state: AppStateType) => state.mainForm.categories);
    //@ts-ignore
    const suggestCategory: SuggestCategoryType[] = useSelector((state: AppStateType) => state.product.suggestCategory);

    let [currentCategories, setCurrentCategories] = useState(categories);
    let [isChecking, setIsChecking] = useState(false);
    let [isMain, setIsMain] = useState(true);
    let [showAll, setShowAll] = useState(false);
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
            let list = currentCategories.filter((item: any) => item.slug === slug).shift();

            if (list) {
                setIsMain(false);
                if (list === categories) {
                    setIsMain(true);
                }
                selectedCategoryList.push({'slug': slug, 'title': list.title});
                setSelectedCategoryList(selectedCategoryList);

                if (list.children) {
                    setCurrentCategories(list.children);
                } else {
                    setCurrentCategories([]);
                    setIsChecking(true);
                    categorizedForm(slug, (token?: string) => {
                        setIsChecking(false);
                    });
                }
            }
        }
    }

    const onSelectSuggestCategory = (num: number) => {

        if(suggestCategory[num]) {
            selectedCategoryList = [{'slug': 'main', 'title': 'Начало'}];
            const list:any = suggestCategory[num];
            let slug = '';
            for (let key in list) {
                slug = list[key].slug;
                selectedCategoryList.push({'slug': slug, 'title': list[key].title});
                /*let categories = currentCategories.filter((item: any) => item.slug === slug).shift();
                console.log(categories);
                if (categories && categories.children) {
                    setCurrentCategories(list.children);
                }*/
            }
            setSelectedCategoryList(selectedCategoryList);
            if(slug) {
                setIsChecking(true);
                setCurrentCategories([]);
                categorizedForm(slug, (token?: string) => {
                    setIsChecking(false);
                });
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
                setIsMain(true);
            } else {
                let selectedCategories = categories;
                for (let i in selectedCategoryList) {
                    let category = selectedCategoryList[i];
                    newSelectedCategoryList.push(category);
                    let list = selectedCategories.filter((item: any) => item.slug === category.slug).shift();
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

    const items = currentCategories.map((item: CategoryType) => {
        if (item.icon) {
            return <>
                <input type="radio" value={item.slug} name="quality" id={item.slug}
                       onClick={() => onSelectCategory(item.slug)}/>
                <label htmlFor={item.slug} className="icon">
                    <div className="content">
                        {item.icon && <img src={apiUrl + "/assets/img/" + item.icon + ".png"} alt={item.title}/>}
                        <p>{item.title}</p>
                    </div>
                </label>
            </>;
        } else {
            return <>
                <input type="radio" id={item.slug} onClick={() => onSelectCategory(item.slug)}/>
                <label htmlFor={item.slug} className="item">{item.title}</label>
            </>;
        }
    });

    let suggestCategoryItems = suggestCategory.map((items: any, index) => {
        const item: SuggestCategoryType = items.slice(-1).pop();
        const first: SuggestCategoryType = items[0];
        if (item) {
            return (<>
                <input type="radio" value={item.slug} name="quality" id={item.slug}
                       onClick={() => {onSelectSuggestCategory(index)}}/>
                <label htmlFor={item.slug} className="icon suggest">
                    <div className="content">
                        <p>{first.title}<br/>{item.title}</p>
                    </div>
                </label>
            </>)
        }
        return '';
    });

    return <BlockUi tag="div" blocking={isChecking}>
        {isMain ?
            <div className="categories_inputs">
                <div className="row">
                    {showAll ?
                        [items, <div className="show_categories" onClick={() => {/*setCurrentCategories([]);*/setShowAll(false);}}>
                            <span>{t('Show suggested categories')}</span>
                        </div>] :
                        [suggestCategoryItems,
                        <div className="show_categories" onClick={() => {setShowAll(true);}}>
                            <span>{t('Show all categories')}</span>
                        </div>]
                    }
                </div>
            </div> :
            <div className="categories-items__subcategories">
                <div className="subcategories_items">
                    {items}
                </div>
            </div>}
        {(selectedCategoryList.length > 1) &&
        <div className="categories-items__selected_categories">
            <div className="selected_categories_title">{t('Selected category:')}</div>
            <div className="selected_categories_items">
                <SelectedCategory list={selectedCategoryList} isSuggested={showAll} goBackFunction={onGoBackByCategory}/>
            </div>
        </div>
        }
    </BlockUi>
        ;
    /*(
    <>

    </>
);*/
}