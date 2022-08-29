import React, {FC} from 'react';
import {SCounterBoard} from "./styled";
import {TCounterBoardProps} from "./types";
import {Text} from "../../styled";

const CounterBoard: FC<TCounterBoardProps> = ({maxCount, count, error, notice}) => {

    return (
        <SCounterBoard>
            {
                error || notice
                    ? <Text fontSize={22}> {error || notice} </Text>
                    : <Text fontSize={52} isMaxValue={count === maxCount}>{count}</Text>
            }
        </SCounterBoard>
    );
};

export default CounterBoard;
