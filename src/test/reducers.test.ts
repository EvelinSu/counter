import {TRootState} from "../redux/store";
import {
    incCurrentValueAC, changeErrorAC,
    changeMaxValueAC,
    changeMinValueAC,
    changeNoticeAC,
    counterReducer, resetCurrentValueAC
} from "../redux/countValuesReducer";

let startState: TRootState
// let startState: TRootState

beforeEach(() => {
        startState = {
            min: 0,
            max: 5,
            current: 0,
            error: "",
            notice: "",
        }
})


test ('change min value', () => {

    const action = changeMinValueAC(3)
    const endState = counterReducer(startState, action)

    expect(endState.min).toBe(3)
    expect(endState.current).toBe(3)
    expect(endState.max).toBe(5)
})

test ('change max value', () => {

    const action = changeMaxValueAC(10)
    const endState = counterReducer(startState, action)

    expect(endState.min).toBe(0)
    expect(endState.max).toBe(10)
})

test ('inc current value', () => {

    const action = incCurrentValueAC()
    const endState = counterReducer(startState, action)

    expect(endState.current).toBe(1)
    expect(endState.min).toBe(0)
    expect(endState.max).toBe(5)
})

test ('reset current value', () => {

    const action = resetCurrentValueAC()
    const endState = counterReducer(startState, action)

    expect(endState.current).toBe(0)
    expect(endState.min).toBe(0)
    expect(endState.max).toBe(5)
})

test ('change notice text', () => {

    const action = changeNoticeAC('any notice')
    const endState = counterReducer(startState, action)

    expect(endState.notice).toBe("any notice")
})

test ('change error text', () => {

    const action = changeErrorAC('any error')
    const endState = counterReducer(startState, action)

    expect(endState.error).toBe("any error")
})