import React from "react";
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
        about: 'some info about...',
        products: [
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
        testimonials: [
            {
                image: imgUser,
                rating: '',
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
    }
};

export const appReducer = (state = initialState, action) => {
    const { payload } = action;
    switch(action.type) {
        case 'INIT_USER':
            return { 
                user: payload
            };
        case 'SET_USER':
            return {
                ...state.user,
                payload,           
            }
        default:
            return state
    }
};

export const initUser = (data) => {
    return {
		type: "INIT_USER",
		payload: data,
	};
}

export const setUser = (data) => {
	return {
		type: "SET_USER",
		payload: data,
	};
}
