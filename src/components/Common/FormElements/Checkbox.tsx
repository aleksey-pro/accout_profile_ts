import * as React from 'react';
import {FormElementType} from '../../../types/types';
import {useField} from "formik";

type PropsType = {
    settings: FormElementType
    disabled?: boolean | undefined
    onChange?: (e:React.ChangeEvent<any>) => void
};

export const Checkbox = (props: PropsType) => {
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

    return <div className="checkbox">
        <input disabled={props.disabled} checked={field.value} type="checkbox" id={attrs.name} {...field} {...otherProps}
               onChange={(e:React.ChangeEvent<any>) => {onChange(e); field.onChange(e);}}/>
        <label htmlFor={attrs.name}>{title}</label>
        {error && touched && <div className="error">{error}</div>}
    </div>
};