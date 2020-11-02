import * as React from 'react';
import {FormElementType} from '../../../types/types';
import {Field, useField} from "formik";

type PropsType = {
    title: string
    id: string
    name: string
    placeholder?: string | undefined
    description?: string | undefined
    message?: string | undefined
    required?: boolean | undefined
    disabled?: boolean | undefined
    onChange?: (e:React.ChangeEvent<any>) => void
};

export const Textarea = (props: PropsType) => {
    const title = props.title;
    const id = props.id;
    const name = props.name;
    const placeholder = props.placeholder;
    const disabled = props.disabled;
    const ref = React.useRef<HTMLInputElement | null>();

    const [
        field,
        { error, touched },
    ] = useField({
        name: name,
    });
    console.log("Textarea -> error", error)
    console.log("Textarea -> field", field)

    const onChange = (props.onChange)?props.onChange:()=>{};

    React.useEffect(() => {
        if(ref.current) {
            ref.current.blur();
        }
    }, [error]);

    return <div className={"input-label " + name}>
        <label htmlFor={id}>{title}</label>
        <Field as="textarea" id={id} placeholder={placeholder} name={name} innerRef={ref}
                  onChange={(e:React.ChangeEvent<any>) => {onChange(e); field.onChange(e);}} disabled={disabled}/>
        {error && touched &&  <div className="msg_err__container"><span className="msg_err">{error}</span></div>}
    </div>
};