import React from "react";
import Card from "./Card";
import Grid from "@material-ui/core/Grid";

const cards = [
    {
        "name": "Player 1",
        "maxHp": 10,
        "initiative": 15
    },
    {
        "name": "Player 2",
        "maxHp": 20,
        "initiative": 14
    },
    {
        "name": "Enemy 1",
        "maxHp": 12,
        "initiative": 10
    }
]

export default function CardList() {

    return (
        <Grid container spacing={2} direction="column">
            {cards.map(card => <Card key={card.name} {...card} />)}
        </Grid>
    );
}