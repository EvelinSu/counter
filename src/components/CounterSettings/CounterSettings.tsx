import React, {FC, useEffect, useState} from 'react';
import Button from "../Button/Button";
import {Flex} from "../../styled";
import {SCounter} from "../Counter/styled";
import CounterSettingsBoard from "./CounterSettingsBoard";
import {useDispatch, useSelector} from "react-redux";
import {
    changeErrorAC,
    changeMaxValueAC,
    changeMinValueAC,
    changeNoticeAC,
    TCounter
} from "../../redux/countValuesReducer";
import {TRootState} from "../../redux/store";

type TCounterSettingsProps = {}

const CounterSettings: FC<TCounterSettingsProps> = ({}) => {

    const state = useSelector<TRootState, TCounter>(state => state.counter)
    const dispatch = useDispatch()

    const [newMinCount, setNewMinCount] = useState<number>(state.min)
    const [newMaxCount, setNewMaxCount] = useState<number>(state.max)

    const validator = () => {
        if (newMinCount < 0) return dispatch(changeErrorAC(`start value can't be less than 0`))
        if (newMaxCount > 100) return dispatch(changeErrorAC(`value can't be more than 100`))
        if (newMaxCount < 0) return dispatch(changeErrorAC(`max value can't be less than 0`))
        if (newMinCount > newMaxCount) return dispatch(changeErrorAC(`start value can't be more than max value`))
        if ((newMinCount !== state.min) || (newMaxCount !== state.max)) {
            dispatch(changeErrorAC(''))
            return dispatch(changeNoticeAC('enter values and press "set"'))
        }
        dispatch(changeErrorAC(''))
        dispatch(changeNoticeAC(''))
    }

    useEffect(() => {
        validator()
    }, [newMinCount, newMaxCount])

    const changeCounts = () => {
        dispatch(changeNoticeAC(''))
        dispatch(changeMinValueAC(newMinCount))
        dispatch(changeMaxValueAC(newMaxCount))
        localStorage.setItem('minCount', JSON.stringify(newMinCount))
        localStorage.setItem('maxCount', JSON.stringify(newMaxCount))
    }

    return (
        <SCounter>
            <CounterSettingsBoard
                setNewMaxCount={setNewMaxCount}
                setNewMinCount={setNewMinCount}
                newMaxCount={newMaxCount}
                newMinCount={newMinCount}
            />
            <Flex>
                <Button
                    label="set"
                    isDisabled={!!state.error || (state.min === newMinCount && state.max === newMaxCount)}
                    callback={changeCounts}
                />
            </Flex>
        </SCounter>
    );
};

export default CounterSettings;