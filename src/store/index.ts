import {Action, applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import appReducer from "../reducers/app";
import {mainFormReducer} from "../reducers/main-form-fields";
import {categorizedFormReducer} from "../reducers/categorized-form-fields";
import {productReducer} from "../reducers/product";

let rootReducer = combineReducers({
    app: appReducer,
    mainForm: mainFormReducer,
    categorizedForm: categorizedFormReducer,
    product: productReducer,
})

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>

let initialState = {
    initialized: false
};

export type InitialStateType = typeof initialState

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

export type BaseThunkType<A extends Action = Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

(window as any).__store__ = store

export default store