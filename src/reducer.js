import { initialState } from './store';

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
