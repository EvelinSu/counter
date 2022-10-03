import {combineReducers, legacy_createStore, applyMiddleware, AnyAction} from "redux"
import {counterReducer} from "./countValuesReducer";
import thunkMiddleware, {ThunkDispatch} from "redux-thunk";



const rootReducer = combineReducers({
    counter: counterReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type TReduxStore = typeof store

export type TRootState = ReturnType<typeof store.getState>

export type AppDispatch = ThunkDispatch<TRootState, undefined, AnyAction>;

export default store