import {useEffect} from "react";
import './App.css';
import Counter from "./components/Counter/Counter";
import {AbsoluteButton, SWrapper} from "./styled";
import CounterSettings from "./components/CounterSettings/CounterSettings";
import {
    changeMaxValueAC,
    changeMinValueAC, TCounter,
} from "./redux/countValuesReducer";
import {useDispatch, useSelector} from "react-redux";
import {TRootState} from "./redux/store";



function App() {
    const getFromLocalStorage = (key: string) => {
        let value = localStorage.getItem(key)
        if (value) return JSON.parse(value)
    }
    const state = useSelector<TRootState, TCounter>(state => state.counter)
    const dispatch = useDispatch()

    useEffect(() => {
        const localValue = (value: string) => getFromLocalStorage(value)

        // if(localValue('minCount')) dispatch(localValue('minCount'))
        // if(localValue('maxCount')) dispatch(localValue('maxCount'))
    })
    const globalReset = () => {
        dispatch(changeMinValueAC(state.min))
        dispatch(changeMaxValueAC(state.max))
        localStorage.clear()
        window.location.reload()
    }

    return (
        <SWrapper>
            <CounterSettings />
            <Counter />
            <AbsoluteButton onClick={globalReset}>
                reset everything!!!!
            </AbsoluteButton>
        </SWrapper>
    );
}

export default App;
