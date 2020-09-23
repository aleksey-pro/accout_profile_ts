import {useEffect} from 'react';
import {isObject, useFormikContext} from 'formik';

const getFirstErrorKey: any = (object: any, keys: any = []) => {
    const firstErrorKey = Object.keys(object)[0];
    if (isObject(object[firstErrorKey])) {
        return getFirstErrorKey(object[firstErrorKey], [...keys, firstErrorKey]);
    }
    return [...keys, firstErrorKey].join('.');
};

const FormikOnError = ({children}: any) => {
    const formik = useFormikContext();

    useEffect(() => {
        if (!formik.isValid && formik.submitCount > 0 && formik.isSubmitting) {
            const firstErrorKey = getFirstErrorKey(formik.errors);
            if (global.window.document.getElementsByName(firstErrorKey).length) {
                global.window.document.getElementsByName(firstErrorKey)[0].focus();
            }
        }
    }, [formik.submitCount, formik.isValid, formik.errors]);
    return children;
};

export default FormikOnError;