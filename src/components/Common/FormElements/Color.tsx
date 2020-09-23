import * as React from 'react';
import {FormElementType} from '../../../types/types';
import {useField} from "formik";

type PropsType = {
    settings: FormElementType
    value: string | undefined
    id?: string
    color?: string
};

export const Color = (props: PropsType) => {
    let {settings, ...otherProps} = props;
    const attrs = settings.attributes;
    const title = settings.title;

    const [
        field,
        { error, touched },
    ] = useField({
        name: attrs.name,
    });
    const id = props.id?props.id:attrs.name;
    const color = props.color?props.color:'';
    let colorEl = <div className="circle d-inline" style={{backgroundColor: color}}/>;
    if (color === 'multicolor') {
        colorEl = <div className="circle multicolor d-inline"/>;
    } else if (color === '#fff') {
        colorEl = <div className="circle white d-inline"/>;
    }
    return <>
        <input type="radio" id={id} {...field} {...otherProps}/>
        <label htmlFor={id} className="color">
            <div className="content-color">
                {colorEl}
                <div className="color-name d-inline">
                    <p>{title}</p>
                </div>
            </div>
        </label>
        {error && touched && <div className="error">{error}</div>}
    </>
};