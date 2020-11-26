import React, { useState, useContext } from 'react';
import { Formik, Form, FieldArray } from 'formik';
import { updateUser } from '../../../../api';
import { setUser } from '../../../../reducer';
import { UserContext } from '../../../../store';
import NotificationField from './NotificationField';

export default function NotificationForm({ notificationFields }) {
    const { store: { user: { notifications } }, dispatch } = useContext(UserContext);
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
        initialValues={{ notifications }}
        onSubmit={onSubmit}>
        {({ handleSubmit, touched }) => (
            <Form onSubmit={handleSubmit}>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>E-mail</th>
                            <th>СМС</th>
                        </tr>
                    </thead>
                    <tbody>
                        <FieldArray name="notifications">
                            {({
                                form: { values },
                                ...fieldArrayHelpers
                            }) => notificationFields && notificationFields.length > 0 &&
                                notificationFields.map((n, i) => <NotificationField 
                                    values={values}
                                    name="notifications" 
                                    title={n.title} 
                                    id1={n.id1} 
                                    id2={n.id2} 
                                    key={i}
                                    arrayHelpers={fieldArrayHelpers}/>
                            )}
                        </FieldArray>
                    </tbody>
                </table>
                <div>
                    {error && Object.keys(touched).length === 0 &&
                    <div className="msg_err__container"><span className="msg_err">{error}</span></div>}
                    <button type="submit" className="btn-dark" disabled={loading}>Сохранить</button>
                </div>
            </Form>
        )}
    </Formik>
}
