import React, {FC, useState} from 'react';
import {SCounter} from "./styled";
import {TCounterProps} from "./types";
import CounterBoard from "./CounterBoard";
import Button from "../Button/Button";
import {Flex} from "../../styled";

const Counter: FC<TCounterProps> = ({count, minCount, maxCount, error, resetCount, incCount, notice}) => {
    return (
        <SCounter>
            <CounterBoard notice={notice} error={error} count={count} maxCount={maxCount} />
            <Flex>
                <Button
                    label="inc"
                    isDisabled={!!error || !!notice || count === maxCount}
                    callback={incCount}
                />
                <Button
                    label="reset"
                    isDisabled={!!error || !!notice || (count === minCount)}
                    callback={resetCount}
                />
            </Flex>
        </SCounter>
    );
};

export default Counter;