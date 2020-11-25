import * as React from 'react';
import { Field } from "formik";

export default function Checkbox (props) {
    const { id, name } = props;
    return <div className="checkbox">
        <Field type="checkbox" name={name} {...props} />
        <label htmlFor={id}></label>
    </div>;
};