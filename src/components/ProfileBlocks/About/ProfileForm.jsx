import React, { useState, useContext } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { updateUser } from '../../../api';
import { UserContext, setUser } from '../../../reducer';

import Input from '../../FormElements/Input';
import Phone from '../../FormElements/Phone';
import Textarea from '../../FormElements/Textarea';
import imgFacebook from '../../../assets/img/facebook.svg';
import imgGoogle from '../../../assets/img/google.svg';

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required('required'),
    surname: Yup.string()
        .required('required'),
    email: Yup.string()
        .required('required'),
    telephone: Yup.string()
        .required('required'), 
    city: Yup.string()
        .required('required'),                                                         
});


export default function ProfileForm() {
    const { store: { user = {} }, dispatch } = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const responseHandler = (response) => {
        if (response.error) {
            setError(response.error);
        } else {
            dispatch(setUser(response.data));
        }
        setLoading(false);
    }
    const onSubmit = (values) => {
        setLoading(true);
        updateUser(values)
            .then(responseHandler)
            .catch(() => setLoading(false))
    }
    return <Formik
        initialValues={user}
        // validationSchema={validationSchema}
        onSubmit={onSubmit}
    >
        {({values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit}) => {
            return <Form className="user-information" onSubmit={handleSubmit}>
                <div className="form-section">
                    <Input id="name" type="text" placeholder="Наталья" name="name" title="*Имя"/>
                    <Input id="surname" type="text" placeholder="Петренко" name="surname" title="*Фамилия"/>
                </div>
                <div className="form-section">
                    <Input id="email" type="text" placeholder="Email" name="email" title="*Email"/>
                    <Phone 
                        id="telephone" 
                        mask={'+380 (99) 999 99 99'} 
                        type="text" 
                        name="telephone" 
                        placeholder="+380 (99) 000 00 00" 
                        title="*Телефон"
                    />
                </div>
                <div className="form-section">
                    <Input id="city" type="text" placeholder="Выберите из списка" name="city" title="*Город"/>
                </div>
                <div className="form-section">
                    <Textarea id="about" title="Коротко о себе" name="about"/>
                </div>
                <div className="social-icons">
                    <span>Привязать аккаунт</span>
                    <a href={`${process.env.API_URL}/connect/facebook`}><img src={imgFacebook} alt=''/></a>
                    <a href={`${process.env.API_URL}/connect/google`}><img src={imgGoogle} alt=''/></a>
                </div>
                {error && Object.keys(touched).length === 0 && 
                    <div className="msg_err__container"><span className="msg_err">{error}</span></div>}
                <button className="btn-dark" type="submit" disabled={loading}>Сохранить</button>
            </Form>
        }}       
    </Formik>
}