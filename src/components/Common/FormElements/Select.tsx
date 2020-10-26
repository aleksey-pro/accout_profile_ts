import * as React from 'react';
import {FormElementType, SelectOptionsType} from '../../../types/types';
import {useField} from "formik";

type PropsType = {
    title: string
    id: string
    name: string
    options: any
    placeholder?: string | undefined
    description?: string | undefined
    message?: string | undefined
    required?: boolean | undefined
    disabled?: boolean | undefined
    onChange?: (e:React.ChangeEvent<any>) => void
};

export const Select = (props: PropsType) => {
    const title = props.title;
    const id = props.id;
    const name = props.name;
    const placeholder = props.placeholder;
    const options = props.options;

    const [
        field,
        { error, touched },
    ] = useField({
        name: name,
    });

    const items = (options) ? options.map((data: any, i: number) =>
        <option key={name + '_' + i.toString()} value={data.id}>{data.label}</option>) : '';

    if(options.length) {
        return <div className={"input-label select_margin-top"}>
            <select disabled={props.disabled} id={name} placeholder={placeholder} {...field}>
                <option value="">
                    {placeholder}
                </option>
                {items}
            </select>
            <label htmlFor={name} className={props.required ? 'required' : ''}>{title}</label>
            {error && touched && <div className="msg_err__container"><span className="msg_err">{error}</span></div>}
        </div>
    } else {
        return <></>
    }
};