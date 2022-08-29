import React, {FC, useState} from 'react';
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
}) => {

    const [newMinCount, setNewMinCount] = useState<number>(minCount)
    const [newMaxCount, setNewMaxCount] = useState<number>(maxCount)

    const validator = () => {
        if (newMinCount < 0) {
            setError(`start value can't be less than 0`)
            return false
        } else if (newMaxCount < 0) {
            setError(`max value can't be less than 0`)
            return false
        } else if (newMinCount > newMaxCount) {
            setError(`start value can't be more than max value`)
            return false
        } else {
            return true
        }
    }

    if (newMinCount !== minCount || newMaxCount !== maxCount) {
        setError('enter values and press "set"')
        validator()
    }

    const changeCounts = () => {
        if (validator()) {
            setError('')
            setMinCount(newMinCount)
            setMaxCount(newMaxCount)
            setCount(newMinCount)
            localStorage.setItem('minCount', JSON.stringify(newMinCount))
            localStorage.setItem('maxCount', JSON.stringify(newMaxCount))
        }
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
                    isDisabled={!validator() || (minCount === newMinCount && maxCount === newMaxCount)}
                    callback={changeCounts}
                />
            </Flex>
        </SCounter>
    );
};

export default CounterSettings;