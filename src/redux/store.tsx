import { combineReducers, createStore } from "redux"
import {counterReducer} from "./countValuesReducer";



const rootReducer = combineReducers({
    counter: counterReducer
})

export const store = createStore(rootReducer)



export type TReduxStore = typeof store

export type TRootState = ReturnType<typeof store.getState>

export default store