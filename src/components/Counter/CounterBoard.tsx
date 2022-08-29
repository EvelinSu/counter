import React, {FC} from 'react';
import {SCounterBoard} from "./styled";
import {TCounterBoardProps} from "./types";
import {Text} from "../../styled";

const CounterBoard: FC<TCounterBoardProps> = ({maxCount, count, error}) => {

    return (
        <SCounterBoard>
            {
                error
                    ? <Text fontSize={22}> {error} </Text>
                    : <Text fontSize={52} isMaxValue={count === maxCount}>{count}</Text>
            }
        </SCounterBoard>
    );
};

export default CounterBoard;
