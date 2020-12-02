export class Player {
    name: string;
    maxHp: number;
    currentHp: number;
    armor: number;
    initiative: number;
    isCurrentTurn: boolean;

    constructor(name: string,
        maxHp: number,
        currentHp: number,
        armor: number,
        initiative: number,
        isCurrentTurn: boolean)
    {
        this.name = name;
        this.maxHp = maxHp;
        this.currentHp = currentHp;
        this.armor = armor;
        this.initiative = initiative;
        this.isCurrentTurn = isCurrentTurn;
    }
}

export const initialCards: Array<Player> = [
    new Player("Player 2", 20, 10, 18, 18, true),
    new Player("Player 1", 10, 10, 14, 15, false),
    new Player("Enemy 1", 12, 10, 11, 10, false),
    new Player("Enemy 2", 12, 0, 11, 10, false),
];