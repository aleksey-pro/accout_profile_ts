import React, { useState, useContext } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { updatePassword } from '../../../../api';
import { UserContext } from '../../../../store';
import Input from '../../../FormElements/Input';
import imgHide from '../../../../assets/img/hyde.png';

const validationSchema = Yup.object().shape({
    oldPass: Yup.string()
        .required('required'),
    pass: Yup.string()
        .required('required'),
    confirmPass: Yup.string()
        .required('required'),                                                       
});


export default function PasswordForm() {
    const { store: { user = {} } } = useContext(UserContext);
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
        // validationSchema={validationSchema}
        onSubmit={onSubmit}
    >
    {({values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit}) => {
        return <Form onSubmit={handleSubmit}>
                <Input type="text" placeholder="Старый пароль" id="oldPass" icon={imgHide} name="oldPass" title="*Изменить пароль"/>
                <Input type="text" placeholder="Новый пароль" id="pass" icon={imgHide} name="pass" title="*Новый пароль"/>
                <Input type="text" placeholder="Новый пароль" id="confirmPass" icon={imgHide} name="confirmPass" title="*Подтвердить пароль"/>
                {message && Object.keys(touched).length === 0 && 
                    <div className="msg_err__container"><span className="msg_err">{message}</span></div>}
                <button type="submit" disabled={loading}>Сохранить</button>
            </Form>
    }}       
    </Formik>
}
