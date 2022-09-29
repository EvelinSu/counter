import React, {FC, useState} from 'react';
import {SCounter} from "./styled";
import CounterBoard from "./CounterBoard";
import Button from "../Button/Button";
import {Flex} from "../../styled";
import {incCurrentValueAC, resetCurrentValueAC, TCounter} from "../../redux/countValuesReducer";
import {useDispatch, useSelector} from "react-redux";
import {TRootState} from "../../redux/store";

type TCounterProps = {

}

const Counter: FC<TCounterProps> = (props) => {

    const state = useSelector<TRootState, TCounter>(state => state.counter)
    const dispatch = useDispatch()

    const resetCount = () => {
        dispatch(resetCurrentValueAC())
    }
    const incCount = () => {
        dispatch(incCurrentValueAC())
    }

    return (
        <SCounter>
            <CounterBoard notice={state.notice} error={state.error} count={state.current} maxCount={state.max} />
            <Flex>
                <Button
                    label="inc"
                    isDisabled={!!state.error || !!state.notice || state.current === state.max}
                    callback={incCount}
                />
                <Button
                    label="reset"
                    isDisabled={!!state.error || !!state.notice || state.current === state.min}
                    callback={resetCount}
                />
            </Flex>
        </SCounter>
    );
};

export default Counter;