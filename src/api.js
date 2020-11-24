import axios from "axios";

const instance = axios.create({
    baseURL: `${process.env}/api`
});

export const getUser = () => instance.get('/get_user')
    .then(res => res.data)
    .catch(err => console.log(err));

export const updateUser = (formData) => instance.post('/update_user', formData)
    .then(res => res.data)
    .catch(err => console.log(err));
