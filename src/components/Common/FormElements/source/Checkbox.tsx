import * as React from 'react';

const Checkbox: React.FC = (field: any, form: { touched: any, errors: any }) => {
    return (
        <div className="checkbox">
            <input type="checkbox" id={field.field.name} name={field.field.name} value={field.value}/>
            <label htmlFor={field.field.name}>{field.label}</label>
            {(form.touched && form.touched[field.field.name]) && form.errors[field.field.name] &&
            <div className="error">{form.errors[field.field.name]}</div>}
        </div>
    )
};

export default Checkbox;