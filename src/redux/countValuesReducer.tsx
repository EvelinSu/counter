
export type TCounter = {
    min: number,
    max: number,
    current: number,
    error: string,
    notice: string,
}
export const initialCountState = {
    min: 0,
    max: 5,
    current: 0,
    error: "",
    notice: "",
}

type TActions = ReturnType<typeof changeMinValueAC>
                | ReturnType<typeof changeMaxValueAC>
                | ReturnType<typeof incCurrentValueAC>
                | ReturnType<typeof resetCurrentValueAC>
                | ReturnType<typeof changeNoticeAC>
                | ReturnType<typeof changeErrorAC>

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