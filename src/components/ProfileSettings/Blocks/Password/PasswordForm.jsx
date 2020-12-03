import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { updatePassword } from '../../../../api';
import Password from '../../../FormElements/Password';
import imgHide from '../../../../assets/img/hyde.png';

const validationSchema = Yup.object().shape({
    oldPass: Yup.string()
        .required('Old password is required'),
    pass: Yup.string()
        .required('Password is required'),
    confirmPass: Yup.string()
    .oneOf([Yup.ref('pass'), null], "Passwords must match")
        .required('Password confirm is required')                               
});


export default function PasswordForm() {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const responseHandler = (response) => {
        if (response.error) {
            setMessage(response.error);
        } else {
            setMessage('Данные успешно обновлены');
        }
        setLoading(false);
    }
    const onSubmit = (values) => {
        setLoading(true);
        updatePassword(values)
            .then(responseHandler)
            .catch(() => setLoading(false))
    }
    return <Formik
        initialValues={{
            oldPass: '',
            pass: '',
            confirmPass: '',
        }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
    >
    {({values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit}) => {
        return <Form onSubmit={handleSubmit}>
                <Password id="oldPass" icon={imgHide} name="oldPass" title="*Старый пароль"/>
                <Password id="pass" icon={imgHide} name="pass" title="*Новый пароль"/>
                <Password id="confirmPass" icon={imgHide} name="confirmPass" title="*Подтвердить пароль"/>
                {message && Object.keys(touched).length === 0 && 
                    <div className="msg_err__container"><span className="msg_err">{message}</span></div>}
                <button type="submit" disabled={loading}>Сохранить</button>
            </Form>
    }}       
    </Formik>
}
