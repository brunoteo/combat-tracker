export type Player = {
    id: string,
    name: string;
    maxHp: number;
    currentHp: number;
    armor: number;
    initiative: number;
    conditionNames: string[];
}