import * as React from 'react';
import { useField } from "formik";

export default function Input (props) {
    const { title, id, name, icon } = props;
    const [
        field,
        {error, touched},
    ] = useField({ name });
    return <div className={"input-label " + name}>
        {title && <label htmlFor={id}>{title}</label>}
        <input {...props} {...field}/>
        {icon && <button className="change-img"><img src={icon} alt=""/></button>}
        {error && touched && <div className="msg_err__container"><span className="msg_err">{error}</span></div>}
    </div>;
};