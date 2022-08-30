import React, {ChangeEvent, FC} from 'react';
import {TCounterBoardProps, TCounterSettingsBoardProps} from "../Counter/types";
import {SCounterBoard, SCounterBoardRows} from "../Counter/styled";
import {Flex, Text} from "../../styled";

const CounterSettingsBoard: FC<TCounterSettingsBoardProps> = ({
    newMinCount,
    setNewMaxCount,
    newMaxCount,
    setNewMinCount,
}) => {

    const maxCountHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewMaxCount(Math.round(+e.currentTarget.value))
    }
    const minCountHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewMinCount(Math.round(+e.currentTarget.value))
    }

    const replaceNulls = (value: number) => String(value).replace(/^0.+/, '')

    return (
        <SCounterBoard>
            <SCounterBoardRows invalidValue={newMaxCount < 0 || newMinCount > newMaxCount || newMaxCount > 100}>
                <Text fontSize={'18px'}>
                    max value:
                </Text>
                <input type={"number"} value={replaceNulls(newMaxCount)} onChange={maxCountHandler} />
            </SCounterBoardRows>
            <SCounterBoardRows invalidValue={newMinCount < 0 || newMinCount > newMaxCount || newMinCount > 100}>
                <Text fontSize={'18px'}>
                    start value:
                </Text>
                <input type={"number"} value={replaceNulls(newMinCount)} onChange={minCountHandler} />
            </SCounterBoardRows>
        </SCounterBoard>
    );
};

export default CounterSettingsBoard;
