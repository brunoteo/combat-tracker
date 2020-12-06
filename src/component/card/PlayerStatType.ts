export type PlayerStatType = {
    color: string,
    playerName: string,
    statName: string,
    value: number,
    changeStat: (name: string, amountToAdd: number) => void
}