import * as React from 'react';
import {FormElementType, SelectOptionsType} from '../../../types/types';
import { useField } from "formik";

type PropsType = {
    title: string
    name: string
    options: any,
    errors: any,
};

type Color = {
    background: string
    border?: string
}

export const Color = (props: PropsType) => {
    const { title, name, options, errors } = props;
    const [field, { touched }] = useField({ name });

    const items = (options) ? options.map((data: any, i: number) => {
        let style:Color = {background: data.value};
        if(data.value === '#fff') {
            style = {border: '1px solid #eaeaf7', background: '#ffffff'};
        }
        if(data.value === 'multicolor') {
            style = {background: 'conic-gradient(from 180deg at 50% 50%, #3FF752 -28.03deg, #72E5FE 28.05deg, #287EFF 78.28deg, #9516F8 129.48deg, #FF2020 177.74deg, #FF9E0D 235.46deg, #FEF525 286.8deg, #3FF752 331.97deg, #72E5FE 388.05deg)'};
        }
        return <span key={i}>
            <input type="radio" {...field} id={data.id} value={data.id} name={name}/>
            <label htmlFor={data.id} className="color">
                <div className="content-color">
                    <div
                        className="circle d-inline"
                        style={style}
                    />
                    <div className="color-name d-inline">
                        <p>{data.label}</p>
                    </div>
                </div>
            </label>
        </span>;
    }) : '';

    if(options.length) {
        return <div className={"color_input"}>
            <div className="category_title">{title}</div>
            <div className="colors-list mobile-hide">
                <div className="row">
                    {items}
                </div>
            </div>
            {errors && touched && <div className="msg_err__container"><span className="msg_err">{errors}</span></div>}
        </div>
    } else {
        return <></>;
    }
};