import * as React from 'react';
import {FormElementType} from '../../../types/types';
import {Field, useField} from "formik";

type PropsType = {
    title: string
    id: string
    name: string
    placeholder?: string | undefined
    description?: string | undefined
    message?: string | undefined
    required?: boolean | undefined
    disabled?: boolean | undefined
    onChange?: (e:React.ChangeEvent<any>) => void
};

export const Textarea = (props: PropsType) => {
    const title = props.title;
    const id = props.id;
    const name = props.name;
    const placeholder = props.placeholder;
    const disabled = props.disabled;

    const [
        field,
        { error, touched },
    ] = useField({
        name: name,
    });

    const onChange = (props.onChange)?props.onChange:()=>{};

    return <div className={"input-label " + name}>
        <label htmlFor={id}>{title}</label>
        <Field as="textarea" id={id} required={true} placeholder={placeholder} name={name}
                  onChange={(e:React.ChangeEvent<any>) => {onChange(e); field.onChange(e);}} disabled={disabled}/>
        {error && touched &&  <div className="msg_err__container"><span className="msg_err">{error}</span></div>}
    </div>
};