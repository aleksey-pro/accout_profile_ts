import * as React from 'react';
import {useField} from "formik";
import ReactInputMask from "react-input-mask";

type PropsType = {
    title: string
    id: string
    name: string
    mask: string
    maskChar: string | null
    placeholder?: string | undefined
    description?: string | undefined
    message?: string | undefined
    required?: boolean | undefined
    disabled?: boolean | undefined
};

export const TextWithMax = (props: PropsType) => {
    const title = props.title;
    const id = props.id;
    const name = props.name;
    const mask = props.mask;
    const maskChar = props.maskChar;
    const placeholder = props.placeholder;
    const description = props.description;
    const required = props.required;
    const disabled = props.disabled;

    const [
        field,
        { error, touched },
    ] = useField({
        name: name,
    });

    return <div className="input-label">
        <label htmlFor={id}>{title}</label>
        <ReactInputMask type="text" mask={mask} maskChar={maskChar} disabled={disabled} id={id} required={required} placeholder={placeholder} {...field} />
        {error && touched && <div className="msg_err__container"><span className="msg_err">{error}</span></div>}
    </div>
};