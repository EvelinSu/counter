export type TCounterProps = {
    minCount: number
    maxCount: number
    count: number,
    resetCount: () => void
    incCount: () => void
    error: string
    notice: string
}

export type TCounterBoardProps = {
    count: number,
    error: string
    maxCount: number
    notice: string
}

export type TCounterSettingsProps = {
    minCount: number
    maxCount: number
    error: string
    setMinCount: (count: number) => void
    setMaxCount: (count: number) => void
    setCount: (count: number) => void
    setError: (text: string) => void
    setNotice: (text: string) => void
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
