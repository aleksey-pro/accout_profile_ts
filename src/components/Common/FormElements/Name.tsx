import * as React from 'react';
import {FormElementType} from '../../../types/types';
import {useField} from "formik";
import {useRef} from "react";

type PropsType = {
    title: string
    id: string
    name: string
    placeholder?: string | undefined
    message?: string | undefined
    required?: boolean | undefined
    disabled?: boolean | undefined
    focusedNameFieldClick?: (callback: any) => void
    onChange?: (e: React.ChangeEvent<any>) => void
};

export const Name = React.forwardRef((props: PropsType, ref: any) => {
    const title = props.title;
    const id = props.id;
    const name = props.name;
    const placeholder = props.placeholder;
    const required = props.required;
    const disabled = props.disabled;
    const message = props.message;

    const [
        field,
        {error, touched},
    ] = useField({
        name: name,
    });

    const onChange = (props.onChange) ? props.onChange : () => {
    };

    const nameInput = useRef<HTMLInputElement>(null);
    const focusingNameField = () => {
        if (nameInput && nameInput.current) {
            nameInput.current.focus();
        }
    };

    return <div className={"input-label " + name}>
        {title && <label htmlFor={id}>{title}</label>}
        <input ref={ref} disabled={disabled} type="text" id={id} required={required} placeholder={placeholder}
               onChange={(e: React.ChangeEvent<any>) => { onChange(e); field.onChange(e); }}/>
        {error && touched && <div className="msg_err__container"><span className="msg_err">{error}</span></div>}
    </div>
});