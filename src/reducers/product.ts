import {productFormApi} from "../api/product-form-api";
import {InferActionsTypes, ProductType, SuggestCategoryType, preveiwImageType, previewType } from "../types/types";
import {BaseThunkType} from "../store";
import {photoApi} from "../api/photo-api";

let initialState = {
    productData: {is_gift:'true'} as ProductType,
    suggestCategory: [] as SuggestCategoryType[],
    selectedSuggestCategory: [] as string[],
    setPreviewImages: [] as any,
    previews: [] as any,
};

export const productReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'BB/SET_UPLOADED_PHOTO': {
            let photos: string[] = [];
            if (state.productData && state.productData.imagePhotos) {
                //@ts-ignore
                photos = state.productData.imagePhotos;
            }
            photos[action.key] = action.data;
            return {...state, productData: {photos: [...photos]}}
        }
        case 'BB/SET_SUGGEST_CATEGORY': {
            return {...state, suggestCategory: action.data}
        }
        case 'BB/SET_SELECTED_SUGGEST_CATEGORY': {
            return {...state, selectedSuggestCategory: action.data}
        }
        case 'BB/SET_PREVIEW_IMAGES': {
            return {...state, previews: action.data}
        }
        default:
            return state;
    }
}

export const actions = {
    setUploadedPhotoInfo: (data: any, key: number) => ({type: 'BB/SET_UPLOADED_PHOTO', data, key} as const),
    setSuggestCategory: (data: any) => ({type: 'BB/SET_SUGGEST_CATEGORY', data} as const),
    setSelectedSuggestCategory: (data: string[]) => ({type: 'BB/SET_SELECTED_SUGGEST_CATEGORY', data} as const),
    setPreviewImages: (data: previewType[]) => ({type: 'BB/SET_PREVIEW_IMAGES', data} as const),
}

export const uploadPhoto = (formData: FormData, key: number, afterResponseAction: (key:number, value:any) => void): ThunkType => async (dispatch) => {
    try {
        const data = await photoApi.uploadFile(formData);
        if (!data.error) {
            dispatch(actions.setUploadedPhotoInfo(data.success, key));
            afterResponseAction(key, data.success);
        } else {
            afterResponseAction(key, data.error);
        }
    } catch (error) {
        console.log(error);
    }
}

export const suggestCategoryByName = (name: string, afterResponseAction: (wasFound: boolean) => void): ThunkType => async (dispatch) => {
    try {    
        const data = await productFormApi.suggestCategoryByName(name);
        if (!data.errors) {
            dispatch(actions.setSuggestCategory(data.success));
            afterResponseAction(true);
        } else {
            afterResponseAction(false);
        }
    } catch (error) {
        console.log(error);
    }
}

export const saveProduct = (formData: FormData, afterResponseAction: (data: any) => void): ThunkType => async (dispatch) => {
    try {   
        const data = await productFormApi.saveProduct(formData);
        if (data.errors === undefined) {
            afterResponseAction(data);
        } else {
            afterResponseAction(data);
        }
    } catch (error) {
        console.log(error);
    }
}

export const setPreviewImages = (data: Array<preveiwImageType>, afterResponseAction: (data: any) => void): ThunkType => async (dispatch) => {
    const transformData: previewType[] = data
        .filter((image: preveiwImageType) => image.preview)
        .map((img: preveiwImageType) => ({
            name: img.fileName,
            rotate: img.rotate,
        }));
    dispatch(actions.setPreviewImages(transformData));
    afterResponseAction(data);
}


type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>