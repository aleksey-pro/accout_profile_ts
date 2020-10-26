import {productFormApi} from "../api/product-form-api";
import {InferActionsTypes, CategoryParamsOptionsType} from "../types/types";
import {BaseThunkType} from "../store";

let initialState = {
    categoryParamOptions: null as CategoryParamsOptionsType | null
};

export const categorizedFormReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'BB/SET_CATEGORIZED_FORM_FIELDS': {
            return {...state, categoryParamOptions: action.data}
        }
        case 'BB/CLEAN_CATEGORIZED_FORM_FIELDS': {
            return {...state, categoryParamOptions: null}
        }
        default:
            return state;
    }
}

export const actions = {
    setCategorizedFormFields: (data: any) => ({type: 'BB/SET_CATEGORIZED_FORM_FIELDS', data} as const),
    cleanCategorizedFormFields: () => ({type: 'BB/CLEAN_CATEGORIZED_FORM_FIELDS'} as const)
}

export const getCategorizedFormBySlug = (slug: string, afterResponseAction: (token?: string) => void):ThunkType => async (dispatch) =>  {
    const data = await productFormApi.getData(slug);
    if (data.errors === undefined) {
        dispatch(actions.setCategorizedFormFields(data));
        let token = '';
        if(data.values && data.values._token){
            token = data.values._token;
        }
        afterResponseAction(token);
    } else {
        afterResponseAction();
    }
}

type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>