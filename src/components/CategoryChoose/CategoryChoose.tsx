import * as React from 'react';
import {MainCategory} from "../Common/FormElements/MainCategory";
import {SubCategory} from "../Common/FormElements/SubCategory";
import {CategoryType, SelectedCategoryType} from "../../types/types";

type MapPropsType = {
    categories: CategoryType[]
    selectedCategoryList: SelectedCategoryType[]
}
type DispatchPropsType = {
    goBackByCategory: (slug: string) => void
    onSelectCategory: (slug: string) => void
}
type PropsType = MapPropsType & DispatchPropsType;

export const CategoryChoose: React.FC<PropsType> = (props) => {
    const items = props.categories.map((item) => {
        if (item.icon) {
            return <MainCategory key={item.slug} item={item} onSelectCategory={props.onSelectCategory}/>;
        } else {
            return <SubCategory key={item.slug} item={item} onSelectCategory={props.onSelectCategory}/>;
        }
    });
    const selectedItemsLength = props.selectedCategoryList.length;
    const selectedItems = props.selectedCategoryList.map(
        (item, index) => {
            if (selectedItemsLength === index + 1) {
                return <button className="btn-light" disabled={true} key={index}>{item.title}</button>;
            } else {
                return <button className="btn-light" key={index}
                               onClick={() => props.goBackByCategory(item.slug)}>{item.title}</button>;
            }
        }
    );
    const className = (props.selectedCategoryList.length === 1) ? 'row' : 'create-product-sub-categories';
    return (
        <>
            <div className="selected-categories">
                {selectedItems}
            </div>
            <div className={className}>
                {items}
            </div>
        </>
    );
};