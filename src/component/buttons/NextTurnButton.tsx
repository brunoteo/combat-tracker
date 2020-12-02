import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import Fab from "@material-ui/core/Fab";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {usePlayerCards} from "../../hooks/PlayerCardProvider"

const useStyles = makeStyles((theme) => ({
    fab: {
        margin: theme.spacing(1),
        position: "fixed",
        bottom: theme.spacing(6),
        right: theme.spacing(10),
        zIndex: 1000
    },
}));

export default function NextTurnButton() {
    const classes = useStyles();
    const {shiftPlayerCards} = usePlayerCards();

    return (
        <Fab
            className={classes.fab}
            color="primary"
            aria-label="next turn"
        >
            <PlayArrowIcon color="inherit" onClick={shiftPlayerCards}/>
        </Fab>
    )
}