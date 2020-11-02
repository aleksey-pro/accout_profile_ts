import * as React from 'react';
import {FormElementType} from '../../../types/types';
import {useField} from "formik";

type PropsType = {
    title: string
    id: string
    name: string
    placeholder?: string | undefined
    placeholderIn?: boolean | undefined
    description?: string | undefined
    message?: string | undefined
    required?: boolean | undefined
    disabled?: boolean | undefined
};

export const Text = (props: PropsType) => {
    const { title, id, name, placeholder, placeholderIn = true } = props;
    const ph = placeholderIn ? placeholder : '';
    const [
        field,
        { error, touched },
    ] = useField({
        name: name,
    });
    const input = <input type="text" {...props} placeholder={ph} {...field}/>;
    return <div className={"input-label " + name}>
        {title && <label htmlFor={id}>{title}</label>}
        {placeholderIn && input}
        {!placeholderIn && <div className="input-flex">
            {input}
        <div className="input-cur">{placeholder}</div>
        </div>}
        {(error && touched) && <div className="msg_err__container"><span className="msg_err">{error}</span></div>}
    </div>
};