import axios from "axios";

const instance = axios.create({
    baseURL: `${process.env}/api`
});

export const initUser = () => instance.get('/get_user')
    .then(res => res.data)
    .catch(err => console.log(err));

export const updateUser = () => instance.get('/update_user')
    .then(res => res.data)
    .catch(err => console.log(err));
