import React, {useState} from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import {SWrapper} from "./styled";
import CounterSettings from "./components/CounterSettings/CounterSettings";

function App() {
    const getFromLocalStorage = (key: string) => {
        let value = localStorage.getItem(key)
        return value && JSON.parse(value)
    }

    const [maxCount, setMaxCount] = useState<number>(getFromLocalStorage('maxCount') || 5)
    const [minCount, setMinCount] = useState<number>(getFromLocalStorage('minCount') || 0)
    const [count, setCount] = useState<number>(minCount)
    const [error, setError] = useState<string>('')
    const resetCount = () => setCount(minCount)
    const incCount = () => count < maxCount && setCount(count + 1)

    return (
        <SWrapper>
            <CounterSettings
                minCount={minCount}
                maxCount={maxCount}
                setError={setError}
                error={error}
                setMinCount={setMinCount}
                setMaxCount={setMaxCount}
                setCount={setCount}
            />
            <Counter
                minCount={minCount}
                maxCount={maxCount}
                count={count}
                error={error}
                resetCount={resetCount}
                incCount={incCount}
            />
        </SWrapper>
    );
}

export default App;
