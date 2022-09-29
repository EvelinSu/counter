

export type TCounterBoardProps = {
    count: number,
    error: string
    maxCount: number
    notice: string
}


export type TCounterSettingsBoardProps = {
    newMaxCount: number
    newMinCount: number
    setNewMinCount: (count: number) => void
    setNewMaxCount: (count: number) => void
}

export type TSCounterBoardProps = {
    isMaxCount?: boolean,
    invalidValue?: boolean
}
