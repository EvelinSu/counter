import './App.css';
import Counter from "./components/Counter/Counter";
import {AbsoluteButton, SPageLoading, SWrapper} from "./styled";
import CounterSettings from "./components/CounterSettings/CounterSettings";
import {
    changeMaxValueAC,
    changeMinValueAC, TCounter,
} from "./redux/countValuesReducer";
import {useDispatch, useSelector} from "react-redux";
import {TRootState} from "./redux/store";
import LoadingIcon from "./assets/LoadingIcon";

function App() {

    const state = useSelector<TRootState, TCounter>(state => state.counter)
    const dispatch = useDispatch();

    const globalReset = () => {
        dispatch(changeMinValueAC(state.min))
        dispatch(changeMaxValueAC(state.max))
        localStorage.clear()
        window.location.reload()
    }

    return (
        <SWrapper>
            {state.isLoading && (
                <SPageLoading>
                    <LoadingIcon />
                </SPageLoading>
            )}
            <CounterSettings />
            <Counter />
            <AbsoluteButton
                title={"reset local storage"}
                onClick={globalReset}
            >
                reset everything!!!!
            </AbsoluteButton>
        </SWrapper>

    );
}

export default App;
