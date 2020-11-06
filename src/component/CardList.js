import React from "react";
import Card from "./Card";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const cards = [
    {
        "name": "Player 1",
        "hp": 10,
        "initiative": 15
    },
    {
        "name": "Player 2",
        "hp": 20,
        "initiative": 14
    },
    {
        "name": "Enemy 1",
        "hp": 12,
        "initiative": 10
    }
]

export default function CardList() {

    return (
        <Grid container spacing={2} >
            {cards.map(card => <Card key={card.name} {...card} />)}
        </Grid>
    );
}