import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import Fab from "@material-ui/core/Fab";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { shiftPlayers } from "../../../../store/store";

const useStyles = makeStyles((theme) => ({
    fab: {
        margin: theme.spacing(1),
        position: "fixed",
        bottom: theme.spacing(6),
        right: theme.spacing(10),
        zIndex: 1000
    },
}));

export const NextTurnButton = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <Fab
            className={classes.fab}
            color="primary"
            aria-label="next turn"
        >
            <PlayArrowIcon color="inherit" onClick={() => dispatch(shiftPlayers())}/>
        </Fab>
    )
}