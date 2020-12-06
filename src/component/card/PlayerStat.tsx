import { Avatar } from "@material-ui/core"
import makeStyles from "@material-ui/core/styles/makeStyles";
import React from "react"
import { PlayerStatType } from "./PlayerStatType";

type PlayerStatStyle = {
    color: string
}

const useStyles = makeStyles((theme) => ({
    root: (props: PlayerStatStyle) => ({
        backgroundColor: props.color,
    }),
}));

export const PlayerStat: React.FC<PlayerStatType> = ({color, value}) => {
    const classes = useStyles({color});

    return (
        <Avatar className={classes.root}>
            {value}
        </Avatar>
    )
}