import React, {useRef, useState} from "react";
import PgCard from "./PgCard";
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";
import AddPgDialog from "./AddPgDialog";

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
    const [open, setOpen] = useState(false);

    const nameRef = useRef();
    const hpRef = useRef();
    const armorRef = useRef();
    const initiativeRef = useRef();

    const addPg = e => {
        e.preventDefault();

        const name = nameRef.current.value;
        const hp = hpRef.current.value;
        const armor = armorRef.current.value;
        const initiative = initiativeRef.current.value;

        setCards(
            [...cards,
                {
                    "name": name,
                    "maxHp": hp,
                    "currentHp": hp,
                    "armor": armor,
                    "initiative": initiative
                }
            ]);

        nameRef.current.value = ""
        hpRef.current.value = null
        armorRef.current.value = null
        initiativeRef.current.value = null

        handleClose()
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
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
                        <AddIcon color="inherit" onClick={handleClickOpen}/>
                    </Tooltip>
                    <AddPgDialog handleClose={handleClose} open={open} addPg={addPg} nameRef={nameRef} hpRef={hpRef} armorRef={armorRef} initiativeRef={initiativeRef}/>
                </Fab>
            </Grid>
            {cards.map(card => <PgCard key={card.name} {...card} />)}
        </main>
    );
}