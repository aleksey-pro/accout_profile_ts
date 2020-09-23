import {instance} from './api';

export const photoApi = {
    uploadFile(formData: FormData) {
        return instance.post('/new-upload-product-image', formData).then(res => res.data);
    }
}