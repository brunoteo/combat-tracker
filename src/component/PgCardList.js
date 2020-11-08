import React, {useState} from "react";
import PgCard from "./PgCard";
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";

const initialCards = [
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
    },
    {
        "name": "Enemy 2",
        "maxHp": 12,
        "currentHp": 10,
        "armor": 11,
        "initiative": 10
    }
]

const useStyles = makeStyles((theme) => ({
    fab: {
        margin: theme.spacing(1),
        position: "fixed",
        bottom: theme.spacing(6),
        right: theme.spacing(6),
        zIndex: 1000
    },
}));

export default function PgCardList() {
    const classes = useStyles();
    const [cards, setCards] = useState(initialCards);

    const onAdd = () => {
        alert("onAdd");
    };

    return (
        <main>
            <Grid>
                <Fab
                    className={classes.fab}
                    color="primary"
                    aria-label="add"
                >
                    <Tooltip title={"Add new character"}>
                        <AddIcon color="inherit" onClick={onAdd} />
                    </Tooltip>
                </Fab>
            </Grid>
            {cards.map(card => <PgCard key={card.name} {...card} />)}
        </main>
    );
}