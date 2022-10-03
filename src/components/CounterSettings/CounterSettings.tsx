import React, {FC, useEffect, useState} from 'react';
import Button from "../Button/Button";
import {Flex} from "../../styled";
import {SCounter} from "../Counter/styled";
import CounterSettingsBoard from "./CounterSettingsBoard";
import {useDispatch, useSelector} from "react-redux";
import {
    changeErrorAC, changeLoadingStatusAC,
    changeMaxValueAC,
    changeMinValueAC,
    changeNoticeAC, getValuesFromStorageThunk,
    TCounter
} from "../../redux/countValuesReducer";
import {AppDispatch, TRootState} from "../../redux/store";

type TCounterSettingsProps = {}

export const useAppDispatch = () => useDispatch<AppDispatch>()

const CounterSettings: FC<TCounterSettingsProps> = () => {
    const dispatch = useAppDispatch()
    const state = useSelector<TRootState, TCounter>(state => state.counter)

    const [newMinCount, setNewMinCount] = useState<number>(state.min)
    const [newMaxCount, setNewMaxCount] = useState<number>(state.max)

    useEffect(() => {
        dispatch(changeLoadingStatusAC(true))
        dispatch(getValuesFromStorageThunk())
            .then((response) => {
                if(response){
                    setNewMinCount(response.min);
                    setNewMaxCount(response.max);
                }
            })
            .catch(() => {})
            .finally(() => {
                setTimeout(() => {
                    dispatch(changeLoadingStatusAC(false))
                }, 500)
            })
    }, []);

    const validator = () => {
        if (newMinCount === newMaxCount) return dispatch(changeErrorAC(`start and max value can't be equal`))
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

    // если прошла вся валидация, отправляем значения в стор и локал сторедж
    const changeCounts = () => {
        dispatch(changeNoticeAC(''))
        dispatch(changeMinValueAC(newMinCount))
        dispatch(changeMaxValueAC(newMaxCount))
        localStorage.setItem('values', JSON.stringify([newMinCount, newMaxCount]))
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