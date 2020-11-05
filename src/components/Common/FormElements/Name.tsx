import * as React from 'react';
import {FormElementType} from '../../../types/types';
import {useField} from "formik";

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
    const { title, id, name } = props;
    const [
        field,
        {error, touched},
    ] = useField({ name });

    const onChange = (props.onChange) ? props.onChange : () => {};

    return <div className={"input-label " + name}>
        {title && <label htmlFor={id}>{title}</label>}
        <input type="text"  {...props} onChange={(e: React.ChangeEvent<any>) => { onChange(e); field.onChange(e); }}/>
        {error && touched && <div className="msg_err__container"><span className="msg_err">{error}</span></div>}
    </div>
});