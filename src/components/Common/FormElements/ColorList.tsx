import * as React from 'react';
import {FormElementType} from "../../../types/types";
import {Color} from "./Color";

type PropsType = {
    settings: FormElementType
    value: string | undefined
};

export const ColorList = (props: PropsType) => {

    const color = <Color settings={props.settings} value={props.value} />;

    const items = (props.settings.selectOptions) ? props.settings.selectOptions.map((data: any, i: number) => {
        return React.cloneElement(color,{
            value: data.value,
            settings: {...props.settings, title: data.label},
            id: props.settings.attributes.name + '_' + i,
            color: data.color,
            key: i
        });
    }) : '';

    return <div>
        <div id="product_color" className="row">{items}</div>
    </div>
};