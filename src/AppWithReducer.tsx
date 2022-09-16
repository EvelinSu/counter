import {useReducer} from "react";
import {counterReducer} from "./redux/countValuesReducer";
import './App.css';
import Counter from "./components/Counter/Counter";
import {AbsoluteButton, SWrapper} from "./styled";
import CounterSettings from "./components/CounterSettings/CounterSettings";
import {
    changeErrorAC,
    changeMaxValueAC,
    changeMinValueAC, changeNoticeAC,
    incCurrentValueAC,
    resetCurrentValueAC
} from "./redux/countValuesReducer";

export const initialCountState = {
    min: 0,
    max: 5,
    current: 0,
    error: "",
    notice: "",
}

function App() {
    const getFromLocalStorage = (key: string) => {
        let value = localStorage.getItem(key)
        if (value) return JSON.parse(value)
    }

    const [count, dispatchCount] = useReducer(counterReducer, {
        max: getFromLocalStorage('maxCount') || initialCountState.max,
        min: getFromLocalStorage('minCount') || initialCountState.min,
        current: getFromLocalStorage('minCount') || initialCountState.min,
        error: "",
        notice: ""
    })

    const resetCount = () => {
        dispatchCount(resetCurrentValueAC())
    }
    const incCount = () => {
        dispatchCount(incCurrentValueAC())
    }
    const globalReset = () => {
        dispatchCount(changeMinValueAC(initialCountState.min))
        dispatchCount(changeMaxValueAC(initialCountState.max))
        localStorage.clear()
        window.location.reload()
    }
    const setError = (error: string) => dispatchCount(changeErrorAC(error))
    const setNotice = (notice: string) => dispatchCount(changeNoticeAC(notice))
    const setMinCount = (min: number) => dispatchCount(changeMinValueAC(min))
    const setMaxCount = (max: number) => dispatchCount(changeMaxValueAC(max))

    return (
        <SWrapper>
            <CounterSettings
                minCount={count.min}
                maxCount={count.max}
                error={count.error}
                setNotice={setNotice}
                setError={setError}
                setMinCount={setMinCount}
                setMaxCount={setMaxCount}
            />
            <Counter
                minCount={count.min}
                maxCount={count.max}
                count={count.current}
                error={count.error}
                notice={count.notice}
                resetCount={resetCount}
                incCount={incCount}
            />
            <AbsoluteButton onClick={globalReset}>
                reset everything!!!!
            </AbsoluteButton>
        </SWrapper>
    );
}

export default App;
