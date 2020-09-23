import * as React from 'react';
import {FormElementType} from '../../../types/types';
import {useField} from "formik";

type PropsType = {
    settings: FormElementType
    value: string | undefined
    disabled?: boolean | undefined
};

export const Select = (props: PropsType) => {
    let {settings, ...otherProps} = props;
    const attrs = settings.attributes;
    const title = settings.title;

    const [
        field,
        { error, touched },
    ] = useField({
        name: attrs.name,
    });

    const items = (settings.selectOptions) ? settings.selectOptions.map((data: any, i: number) =>
        <option key={field.name + '_' + i.toString()} value={data.value}>{data.label}</option>) : '';

    return <div className="input-label">
        <label htmlFor={attrs.name} className={attrs.required ? 'required' : ''}>{title}</label>
        <select disabled={props.disabled} id={attrs.name} placeholder={attrs.placeholder} {...field} {...otherProps}>
            <option value="">
                {attrs.placeholder}
            </option>
            {items}
        </select>
        {error && touched && <div className="error">{error}</div>}
    </div>
};