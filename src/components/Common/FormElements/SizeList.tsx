import * as React from 'react';
import {FormElementType} from '../../../types/types';
import {Size} from "./Size";

type PropsType = {
    settings: FormElementType
    value: string | undefined
};

export const SizeList = (props: PropsType) => {

    const size = <Size settings={props.settings} value={props.value} />;

    const items = (props.settings.selectOptions) ? props.settings.selectOptions.map((data: any, i: number) => {
        return React.cloneElement(size,{
            value: data.value,
            settings: {...props.settings, title: data.label},
            id: props.settings.attributes.name + '_' + i,
            key: i
        });
    }) : '';

    return <div>
        <div className="row">{items}</div>
    </div>
};