import React, {ChangeEvent, FC} from 'react';
import { TCounterSettingsBoardProps} from "../Counter/types";
import {SCounterBoard, SCounterBoardRows} from "../Counter/styled";
import {Text} from "../../styled";

const CounterSettingsBoard: FC<TCounterSettingsBoardProps> = ({
    newMinCount,
    setNewMaxCount,
    newMaxCount,
    setNewMinCount,
}) => {

    const maxCountHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = +e.currentTarget.value
        if (value <= 1000 && value >= 0) setNewMaxCount(Math.round(value))
    }
    const minCountHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = +e.currentTarget.value
        if (value <= 1000 && value >= 0) setNewMinCount(Math.round(value))
    }

    const replaceNulls = (value: number) => String(value).replace(/^0.+/, '')
    // P.S. да, я знаю, что можно сделать это с помощью String(), но я не доверяю цыганским фокусам..........

    return (
        <SCounterBoard>
            <SCounterBoardRows invalidValue={newMinCount > newMaxCount || newMinCount === newMaxCount}>
                <Text fontSize={'18px'}>
                    max value:
                </Text>
                <input type={"number"} value={replaceNulls(newMaxCount)} onChange={maxCountHandler} />
            </SCounterBoardRows>
            <SCounterBoardRows invalidValue={newMinCount > newMaxCount || newMinCount === newMaxCount}>
                <Text fontSize={'18px'}>
                    start value:
                </Text>
                <input type={"number"} value={replaceNulls(newMinCount)} onChange={minCountHandler} />
            </SCounterBoardRows>
        </SCounterBoard>
    );
};

export default CounterSettingsBoard;
