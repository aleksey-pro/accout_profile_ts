import * as React from 'react';
import {FormElementType} from '../../../types/types';
import {Field} from 'formik';
import SourceCheckboxList from "./source/Checkbox";

type PropsType = {
    settings: FormElementType
    value: string | undefined
};

export const CheckboxList: React.FC<PropsType> = (props) => {
    return <Field
        name={props.settings.attributes.name}
        component={SourceCheckboxList}
        label={props.settings.title}
        placeholder={props.settings.attributes.placeholder}
        required={props.settings.attributes.required}
        selectOptions={props.settings.selectOptions}
    />
};