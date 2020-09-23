import {instance} from './api';

export const categoryApi = {
    getPossibleCategoryByProductTitle(title: string) {
        return instance.get('/get-possible-category/' + title).then(res => res.data);
    }
}
