import { initialState } from './store';

export const appReducer = (state = initialState, action) => {
    const { payload } = action;
    switch(action.type) {
        case 'INIT_USER':
            return { 
                user: payload,
            };
        case 'SET_USER':
            return {
                ...state.user,
                payload,           
            }
        case 'SET_DATA':
            const { data, dataType } = payload;
            return {
                ...state,
                [dataType]: data,
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

export const setUserData = (data, type) => {
    return {
		type: "SET_DATA",
		payload: { data, dataType: type },
	};
}