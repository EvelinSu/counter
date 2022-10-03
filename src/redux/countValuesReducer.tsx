import {AppDispatch} from "./store";

export type TCounter = {
    min: number,
    max: number,
    current: number,
    error: string,
    notice: string,
    isLoading: boolean
}
export const initialCountState = {
    min: 0,
    max: 5,
    current: 0,
    error: "",
    notice: "",
    isLoading: true
}

type TActions = ReturnType<typeof changeMinValueAC>
                | ReturnType<typeof changeMaxValueAC>
                | ReturnType<typeof incCurrentValueAC>
                | ReturnType<typeof resetCurrentValueAC>
                | ReturnType<typeof changeNoticeAC>
                | ReturnType<typeof changeErrorAC>
                | ReturnType<typeof changeLoadingStatusAC>

export const counterReducer = (state: TCounter = initialCountState, action: TActions): TCounter => {
    switch (action.type) {
        case "CHANGE-MIN":
            return {...state, min: action.newMinValue, current: action.newMinValue}
        case "CHANGE-MAX":
            return {...state, max: action.newMaxValue, current: state.min}
        case "RESET-CURRENT":
            return {...state, current: state.min}
        case "INC-CURRENT":
            return {...state, current: state.current + 1}
        case "CHANGE-NOTICE":
            return {...state, notice: action.newNotice}
        case "CHANGE-ERROR":
            return {...state, error: action.newError}
        case "CHANGE-LOADING-STATUS":
            return {...state, isLoading: action.isLoading}
        default:
            return state
    }

}

export const changeMinValueAC = (newMinValue: number) => ({
    type: "CHANGE-MIN",
    newMinValue
} as const)
export const changeMaxValueAC = (newMaxValue: number) => ({
    type: "CHANGE-MAX",
    newMaxValue
} as const)
export const incCurrentValueAC = () => ({
    type: "INC-CURRENT",
} as const)
export const resetCurrentValueAC = () => ({
    type: "RESET-CURRENT",
} as const)
export const changeNoticeAC = (newNotice: string) => ({
    type: "CHANGE-NOTICE",
    newNotice
} as const)
export const changeErrorAC = (newError: string) => ({
    type: "CHANGE-ERROR",
    newError
} as const)
export const changeLoadingStatusAC = (isLoading: boolean) => ({
    type: "CHANGE-LOADING-STATUS",
    isLoading
} as const)

export const getFromLocalStorage = (key: 'values') => {
    let value = localStorage.getItem(key)
    if (value) return JSON.parse(value)
}

export const getValuesFromStorageThunk = () => async (dispatch: AppDispatch) => {
    dispatch(changeLoadingStatusAC(true))
    const [min, max] = getFromLocalStorage('values');
    dispatch(changeMinValueAC(min));
    dispatch(changeMaxValueAC(max));
    return {
        min: Number(min), max: Number(max)
    }
}