import React, {useState} from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import {AbsoluteButton, SWrapper} from "./styled";
import CounterSettings from "./components/CounterSettings/CounterSettings";

const initialCountState = {
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

    const [count, setCount] = useState<typeof initialCountState>({
        max: getFromLocalStorage('maxCount') || initialCountState.max,
        min: getFromLocalStorage('minCount') || initialCountState.min,
        current: getFromLocalStorage('minCount') || initialCountState.min,
        error: "",
        notice: ""
    })

    const resetCount = () => {
        setCount((el) => ({...el, current: count.min}));
    }

    const incCount = () => {
        const {current, max} = count;
        setCount((el) => ({...el, current: current + 1}))
    }

    const globalReset = () => {
        setCount(initialCountState);
        localStorage.clear()
        window.location.reload()
    }

    const setError = (error: string) => setCount((el) => ({...el, error}))
    const setNotice = (notice: string) => setCount((el) => ({...el, notice}))
    const setMinCount = (min: number) => setCount((el) => ({...el, min}))
    const setMaxCount = (max: number) => setCount((el) => ({...el, max}))
    const setCountValue = (current: number) => setCount((el) => ({...el, current}))

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
                setCount={setCountValue}
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
