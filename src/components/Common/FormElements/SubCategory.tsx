import * as React from 'react';
import {CategoryType} from "../../../types/types";

type PropsType = {
    item: CategoryType
    onSelectCategory: (slug: string) => void
};

export const SubCategory = (props: PropsType) => {
    return (
        <>
            <button id={props.item.slug}
                    onClick={() => props.onSelectCategory(props.item.slug)}>{props.item.title}</button>
        </>
    )
};