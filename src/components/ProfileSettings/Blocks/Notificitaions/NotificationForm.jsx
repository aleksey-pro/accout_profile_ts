import React, { useState, useContext } from 'react';
import { Formik, Form, FieldArray } from 'formik';
import * as Yup from 'yup';
import { updateUser } from '../../../../api';
import { setUser } from '../../../../reducer';
import { UserContext } from '../../../../store';
import NotificationField from './NotificationField';

export default function NotificationForm({ notificitaionsState }) {
    const { notifications } = notificitaionsState;
    const { store: { user }, dispatch } = useContext(UserContext);
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
        // console.log("🚀 ~ file: NotificationForm.jsx ~ line 29 ~ onSubmit ~ values", values)
        // const cleanValues = {...values};
        // delete cleanValues.notifications;
        // setLoading(true);
        // updateUser(cleanValues)
        //     .then(responseHandler)
        //     .catch(() => setLoading(false))
    }
    return <Formik
        initialValues={{ notifications }}
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
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
                                form: { values, setValues, validateForm },
                                ...fieldArrayHelpers
                            }) => values.notifications && values.notifications.length > 0 &&
                                    values.notifications.map((n, i) => <NotificationField 
                                        name="checked" title={n.title} id1={n.id1} id2={n.id2} index={i} />
                            )}
                        </FieldArray>
                    </tbody>
                </table>
                <div>
                    <button type="submit" className="btn-dark">Сохранить</button>
                </div>
            </Form>
        )}
    />
}
