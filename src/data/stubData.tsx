import { Player } from "../shared/Player";

export const initialCards: Player[] = [
    {name: "Player 2", maxHp: 20, currentHp: 10, armor: 18, initiative: 18, isCurrentTurn: true},
    {name: "Player 1", maxHp: 10, currentHp: 10, armor: 14, initiative: 15, isCurrentTurn: false},
    {name: "Enemy 1", maxHp: 12, currentHp: 10, armor: 11, initiative: 10, isCurrentTurn: false},
    {name: "Enemy 2", maxHp: 12, currentHp: 0, armor: 11, initiative: 10, isCurrentTurn: false},
];