// TODO status può diventare isAlive = bool
export const initialCards = [
    {
        "name": "Player 2",
        "maxHp": 20,
        "currentHp": 10,
        "armor": 18,
        "initiative": 18,
        "status": "alive",
        "isCurrentTurn": true
    },
    {
        "name": "Player 1",
        "maxHp": 10,
        "currentHp": 10,
        "armor": 14,
        "initiative": 15,
        "status": "alive",
        "isCurrentTurn": false
    },
    {
        "name": "Enemy 1",
        "maxHp": 12,
        "currentHp": 10,
        "armor": 11,
        "initiative": 10,
        "status": "alive",
        "isCurrentTurn": false
    },
    {
        "name": "Enemy 2",
        "maxHp": 12,
        "currentHp": 0,
        "armor": 11,
        "initiative": 10,
        "status": "dead",
        "isCurrentTurn": false
    }
]