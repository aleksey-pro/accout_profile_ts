import * as React from 'react';
import {FormElementType} from '../../../types/types';
import {useField} from "formik";

type PropsType = {
    settings: FormElementType
    value: string | undefined
    onChange?: (e:React.ChangeEvent<any>) => void
    message?: string
    disabled?: boolean | undefined
};

export const Text = (props: PropsType) => {
    let {settings, ...otherProps} = props;
    const attrs = settings.attributes;
    const title = settings.title;

    const [
        field,
        { error, touched },
    ] = useField({
        name: attrs.name,
    });

    const onChange = (props.onChange)?props.onChange:()=>{};
    const message = props.message;

    return <div className="input-label">
        <label htmlFor={attrs.name} className={attrs.required ? 'required' : ''}>{title}</label>
        <input disabled={props.disabled} type="text" id={attrs.name} placeholder={attrs.placeholder} {...field} {...otherProps} onChange={(e:React.ChangeEvent<any>) => {onChange(e); field.onChange(e);}}/>
        {message?(<div className="message">{message}</div>):(error && touched && <div className="error">{error}</div>)}
    </div>
};