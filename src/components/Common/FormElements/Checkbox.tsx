import * as React from 'react';
import {FormElementType} from '../../../types/types';
import {useField, Field} from "formik";

type PropsType = {
    title: string
    id: string
    name: string
    placeholder?: string | undefined
    description?: string | undefined
    message?: string | undefined
    required?: boolean | undefined
    disabled?: boolean | undefined
    onClick?: ((event: any) => void) | undefined
};

export const Checkbox = (props: PropsType) => {
    const title = props.title;
    const id = props.id;
    const name = props.name;
    const placeholder = props.placeholder;
    const required = props.required;
    const disabled = props.disabled;
    const onClick = props.onClick;

    const [
        field,
        { error, touched },
    ] = useField({
        name: name,
    });

    return <div className={"checkbox " + name}>
        <Field disabled={disabled} type="checkbox" id={id} name={name} required={required} placeholder={placeholder} onClick={onClick} />
        {title && <label htmlFor={id}>{title}</label>}
        {error && touched && <div className="msg_err__container"><span className="msg_err">{error}</span></div>}
    </div>
};