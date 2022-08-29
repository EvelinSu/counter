import React, {FC, useState} from 'react';
import {SCounter} from "./styled";
import {TCounterProps} from "./types";
import CounterBoard from "./CounterBoard";
import Button from "../Button/Button";
import {Flex} from "../../styled";

const Counter: FC<TCounterProps> = ({count, minCount, maxCount, error, resetCount, incCount}) => {
    return (
        <SCounter>
            <CounterBoard error={error} count={count} maxCount={maxCount} />
            <Flex>
                <Button
                    label="inc"
                    isDisabled={error ? true : count === maxCount}
                    callback={incCount}
                />
                <Button
                    label="reset"
                    isDisabled={error ? true : (count === minCount)}
                    callback={resetCount}
                />
            </Flex>
        </SCounter>
    );
};

export default Counter;