import { combineReducers, createStore } from "redux"
import {counterReducer} from "./countValuesReducer";



const rootReducer = combineReducers({
    counter: counterReducer
})

export const store = createStore(rootReducer)


export type TRootState = {
    min: number,
    max: number,
    current: number,
    notice: string,
    error: string
}
export type TReduxStore = typeof store

export default store