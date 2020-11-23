import React from "react";

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
        products: [],
        testimonials: [],
        favourites: [],
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

export function initUser(data) {
    return {
		type: "INIT_USER",
		payload: data,
	};
}

export function setUser(data) {
	return {
		type: "SET_USER",
		payload: data,
	};
}
