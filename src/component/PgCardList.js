import React from "react";
import PgCard from "./PgCard";
import Box from "@material-ui/core/Box";

const cards = [
    {
        "name": "Player 1",
        "maxHp": 10,
        "currentHp": 10,
        "armor": 14,
        "initiative": 15
    },
    {
        "name": "Player 2",
        "maxHp": 20,
        "currentHp": 10,
        "armor": 18,
        "initiative": 14
    },
    {
        "name": "Enemy 1",
        "maxHp": 12,
        "currentHp": 10,
        "armor": 11,
        "initiative": 10
    }
]

export default function PgCardList() {

    return (
        <Box>
            {cards.map(card => <PgCard key={card.name} {...card} />)}
        </Box>
    );
}