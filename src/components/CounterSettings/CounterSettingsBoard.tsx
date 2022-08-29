import React, {ChangeEvent, FC} from 'react';
import {TCounterBoardProps, TCounterSettingsBoardProps} from "../Counter/types";
import {SCounterBoard, SCounterBoardRows} from "../Counter/styled";
import {Flex, Text} from "../../styled";

const CounterSettingsBoard: FC<TCounterSettingsBoardProps> = ({
    newMinCount,
    setNewMaxCount,
    newMaxCount,
    setNewMinCount
}) => {

    const maxCountHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewMaxCount(+e.currentTarget.value)
    }
    const minCountHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewMinCount(+e.currentTarget.value)
    }


    return (
        <SCounterBoard>
            <SCounterBoardRows invalidValue={newMaxCount < 0 || newMaxCount < newMinCount}>
                <Text fontSize={'18px'}>
                    max value:
                </Text>
                <input type={"number"} value={newMaxCount} onChange={maxCountHandler} />
            </SCounterBoardRows>
            <SCounterBoardRows invalidValue={newMinCount < 0 || newMinCount > newMaxCount}>
                <Text fontSize={'18px'}>
                    start value:
                </Text>
                <input type={"number"} value={newMinCount} onChange={minCountHandler} />
            </SCounterBoardRows>
        </SCounterBoard>
    );
};

export default CounterSettingsBoard;
