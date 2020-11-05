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
    const { title, id, name } = props;
    const [
        field,
        { error, touched },
    ] = useField({
        name: name,
    });
    return <div className="input-label">
        <label htmlFor={id}>{title}</label>
        <ReactInputMask type="text" {...props} {...field} />
        {error && touched && <div className="msg_err__container"><span className="msg_err">{error}</span></div>}
    </div>
};