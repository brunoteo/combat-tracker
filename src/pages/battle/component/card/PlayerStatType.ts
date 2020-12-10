export type PlayerStatType = {
    playerName: string,
    statName: string,
    value: number,
    changeStat: (name: string, amountToAdd: number) => void,
}