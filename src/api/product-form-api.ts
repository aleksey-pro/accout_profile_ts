import {instance} from './api';
import i18next from "i18next";

export const productFormApi = {
    getData(slug: string) {
        return instance.get('/product-form/' + slug).then(res => res.data);
    },
    suggestCategoryByName(name: string) {
        return instance.get('/get-possible-category/'+ name).then(res => res.data);
    },
    saveProduct(formData: FormData) {
        return instance.post('/save-product', formData).then(res => res.data);
    },
    initData() {
        return instance.get('/init-create-product-form').then(res => res.data);
    }
}
