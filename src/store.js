import React, { useReducer } from "react";
import { appReducer } from './reducer';

import imgQ2 from './assets/img/q2.png';
import imgUser from './assets/img/user.png';

export const UserContext = React.createContext();
export const initialState = {
    user: {
        name: 'Наталья',
        surname: 'Петренко',
        email: 'mail@natalya.com',
        avatar: '',
        phone: '',
        city: 'Кропивницкий',
        socialAccountUrl: '',
        timeOnSite: 332,
        timeForResponse: 2,
        about: 'Краткая информация пользователя о себе, обращение к покупателям, любой текст, которым пользователь захочет поделиться в своем профиле.',
        testimonials: [
            {
                image: imgUser,
                rating: 'positive',
                fullname: 'Ольга Марозова',
                city: 'г. Кропивницкий',
                purchased: 'Сарафан зеленый для девочки в горошек новый | 200 грн',
                feedbackText: 'Рекомендую!',
                date: '11 ноября 2018 г., 12:56',
                feedbackStatus: 'Новый',
                status: 1
            }
        ],
        favourites: [
            {
                title: 'Ботинки (ботиночки) ортопедические фирмы "panda orthopedic" для девочки',
                image: imgQ2,
                rank: 'Опытный продавец',
                price: 200,
                age: '4-5 лет',
                brand: 'Zara1',
                status: 1,
            },
            {
                title: 'Ботинки (ботиночки) ортопедические фирмы "panda orthopedic" для девочки',
                image: imgQ2,
                rank: 'Опытный продавец',
                price: 200,
                age: '4-5 лет',
                brand: 'Zara2',
                status: 3,
            },
        ],
        notifications: []
    },
    products: {
        items :
            [
                {
                    title: 'Ботинки (ботиночки) ортопедические фирмы "panda orthopedic" для девочки',
                    image: imgQ2,
                    rank: 'Опытный продавец',
                    price: 200,
                    age: '4-5 лет',
                    brand: 'Zara1',
                    status: 1,
                },
                {
                    title: 'Ботинки (ботиночки) ортопедические фирмы "panda orthopedic" для девочки',
                    image: imgQ2,
                    rank: 'Опытный продавец',
                    price: 200,
                    age: '4-5 лет',
                    brand: 'Zara1',
                    status: 1,
                },
                {
                    title: 'Ботинки (ботиночки) ортопедические фирмы "panda orthopedic" для девочки',
                    image: imgQ2,
                    rank: 'Опытный продавец',
                    price: 200,
                    age: '4-5 лет',
                    brand: 'Zara2',
                    status: 1,
                },
                {
                    title: 'Ботинки (ботиночки) ортопедические фирмы "panda orthopedic" для девочки',
                    image: imgQ2,
                    rank: 'Опытный продавец',
                    price: 200,
                    age: '4-5 лет',
                    brand: 'Zara3',
                    status: 2,
                },
            ],
        currentPage: 1,
        total: 100,
        count: 25,
        pageCount: 4,
    },
};
export const Store = ({children}) => {
    const [store, dispatch] = useReducer(appReducer, initialState);
    return (
        <UserContext.Provider value={{ store, dispatch }}>
            {children}
        </UserContext.Provider>
    )
};