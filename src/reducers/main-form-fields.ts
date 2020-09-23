import {CategoryType, InferActionsTypes, MainFormFieldsType} from "../types/types";
import {BaseThunkType} from "../store";
import {productFormApi} from "../api/product-form-api";

let initial_categories = [{}];
let initial_mainFormFields = {};
let initialState = {
    categories: initial_categories as CategoryType[] | undefined,
    mainFormFields: initial_mainFormFields as MainFormFieldsType,
    locale: 'ua' as string,
};

export const mainFormReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'BB/INIT': {
            return {...state, categories: action.data.categories, mainFormFields: action.data.form.settings, locale: action.data.locale}
        }
        default:
            return state;
    }
}

export const actions = {
    initData: (data: {categories:any, form:{settings:any}, locale:string}) => ({type: 'BB/INIT', data} as const)
}


export const initData = (afterResponseAction: () => void): ThunkType => async (dispatch) => {
    const data = await productFormApi.initData();
    if (data.errors === undefined) {
        dispatch(actions.initData(data.success));
        afterResponseAction();
    } else {
        afterResponseAction();
    }
}

type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>