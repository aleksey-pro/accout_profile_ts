import * as React from 'react';
import { useState } from 'react'
import { useField } from "formik";

export default function Password (props) {
    const { title, id, name, icon } = props;
    const [showPassword, setShowPassword] = useState(false);
    const [
        field,
        {error, touched},
    ] = useField({ name });
    return <div className={"input-label " + name}>
        {title && <label htmlFor={id}>{title}</label>}
        <input type={showPassword ? 'text' : 'password'} {...props} {...field}/>
        {icon && <button className={`change-img ${error ? 'error' : ''}`} type="button">
            <img src={icon} alt="" onClick={() => setShowPassword(!showPassword)}/>
        </button>}
        {error && touched && <div className="msg_err__container">
            <span className="msg_err">{error}</span>
        </div>}
    </div>;
};