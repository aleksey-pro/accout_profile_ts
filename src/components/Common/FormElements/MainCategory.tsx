import * as React from 'react';
import {CategoryType} from "../../../types/types";
import apiUrl from "../../../apiUrl";

type PropsType = {
    item: CategoryType
    onSelectCategory: (slug: string) => void
};

export const MainCategory = (props: PropsType) => {
    return (
        <>
            <input type="radio" value={props.item.slug} name="category" id={props.item.slug}
                   onClick={() => props.onSelectCategory(props.item.slug)}/>
            <label htmlFor={props.item.slug} className="icon">
                <div className="content">
                    <img src={apiUrl + "/assets/img/" + props.item.icon + ".png"} alt={props.item.title}/>
                    <p>{props.item.title}</p>
                </div>
            </label>
        </>
    )
};