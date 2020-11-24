import * as React from 'react';
import {useField} from "formik";

export default function Textarea (props) {
    const { title, id, name } = props;
    const [
        field,
        {error, touched},
    ] = useField(props);

    return <div className={"input-label " + name}>
        {title && <label htmlFor={id}>{title}</label>}
        <textarea {...props} {...field}></textarea >
        {error && touched && <div className="msg_err__container"><span className="msg_err">{error}</span></div>}
    </div>
};