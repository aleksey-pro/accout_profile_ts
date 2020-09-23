import * as React from 'react';
import {FormElementType} from '../../../types/types';
import {useField} from "formik";

type PropsType = {
    settings: FormElementType
    value: string | undefined
    id?: string
};

export const Size = (props: PropsType) => {
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

    return <>
        <input type="radio" id={id} {...field} {...otherProps}/>
        <label htmlFor={id} className="icon">
            <div className="size-val">
                <p>{title}</p>
            </div>
        </label>
        {error && touched && <div className="error">{error}</div>}
    </>
};