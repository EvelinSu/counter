import React, {FC, useEffect, useState} from 'react';
import Button from "../Button/Button";
import {Flex} from "../../styled";
import {TCounterProps, TCounterSettingsProps} from "../Counter/types";
import {SCounter} from "../Counter/styled";
import CounterSettingsBoard from "./CounterSettingsBoard";
import {v1} from "uuid";

const CounterSettings: FC<TCounterSettingsProps> = ({
    setError,
    minCount,
    maxCount,
    setCount,
    setMinCount,
    setMaxCount,
    setNotice,
    error
}) => {

    const [newMinCount, setNewMinCount] = useState<number>(minCount)
    const [newMaxCount, setNewMaxCount] = useState<number>(maxCount)

    const validator = () => {
        if (newMinCount < 0) return setError(`start value can't be less than 0`)
        if (newMaxCount > 100) return setError(`value can't be more than 100`)
        if (newMaxCount < 0) return setError(`max value can't be less than 0`)
        if (newMinCount > newMaxCount) return setError(`start value can't be more than max value`)
        if ((newMinCount !== minCount) || (newMaxCount !== maxCount)) {
            console.log('aaaa')
            setError('')
            return setNotice('enter values and press "set"')
        }
        setError('')
        setNotice('')
    }

    useEffect(() => {
        validator()
    },[(newMinCount | newMaxCount)])



    const changeCounts = () => {
        setNotice('')
        setMinCount(newMinCount)
        setMaxCount(newMaxCount)
        setCount(newMinCount)
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
                    isDisabled={!!error || (minCount === newMinCount && maxCount === newMaxCount)}
                    callback={changeCounts}
                />
            </Flex>
        </SCounter>
    );
};

export default CounterSettings;