import axios from "axios";

const instance = axios.create({
    baseURL: `${process.env.API_URL}/api`
});

export const getUserData = {
    "products": (page) => instance.get(`/get_products?page=${page}`)
        .then(res => res.data)
        .catch(err => console.log(err)),
    "reviews": (page) => instance.get(`/get_reviews?page=${page}`)
        .then(res => res.data)
        .catch(err => console.log(err)),
    "favourites": (page) => instance.get(`/favourites?page=${page}`)
        .then(res => res.data)
        .catch(err => console.log(err)),
}

export const getUser = () => instance.get('/get_user')
    .then(res => res.data)
    .catch(err => console.log(err));

export const updateUser = (data) => instance.post('/update_user', data)
    .then(res => res.data)
    .catch(err => console.log(err));

export const updatePassword = (data) => instance.post('/update_password', data)
    .then(res => res.data)
    .catch(err => console.log(err));