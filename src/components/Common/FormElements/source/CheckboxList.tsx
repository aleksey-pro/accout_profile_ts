import * as React from 'react';

const CheckboxList: React.FC = (field: any, form: { touched: any, errors: any }) => {
    const items = (field.selectOptions) ? field.selectOptions.map((data: any, i: number) => {
        return <div key={field.field.name + '_' + i.toString()}>
            <input type="checkbox" id={data.name} name={data.name} value={data.value}/>
            <label htmlFor={data.name}>{data.label}</label>
        </div>;
    }) : '';

    return <div className="checkbox-list">
        {items}
        {(form.touched && form.touched[field.field.name]) && form.errors[field.field.name] &&
        <div className="error">{form.errors[field.field.name]}</div>}
    </div>;
};

export default CheckboxList;