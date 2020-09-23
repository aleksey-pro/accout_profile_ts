import * as React from 'react';
import {FormElementType} from '../../../types/types';
import {useField} from "formik";

type PropsType = {
    settings: FormElementType
    value: string | undefined
};

export const Textarea = (props: PropsType) => {
    let {settings, ...otherProps} = props;
    const attrs = settings.attributes;
    const title = settings.title;

    const [
        field,
        { error, touched },
    ] = useField({
        name: attrs.name,
    });

    return <div className="input-label">
        <label htmlFor={attrs.name} className={attrs.required ? 'required' : ''}>{title}</label>
        <textarea id={attrs.name} placeholder={attrs.placeholder} {...field} {...otherProps}/>
        {error && touched && <div className="error">{error}</div>}

    </div>
};