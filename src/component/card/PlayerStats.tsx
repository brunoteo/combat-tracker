import { makeStyles } from "@material-ui/core"
import React from "react"
import { PlayerStat } from "./PlayerStat";
import { PlayerStatType } from "./PlayerStatType"

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "space-around"
    }
}));

type PlayerStatsType = {
    playerStats: PlayerStatType[]
}

export const PlayerStats: React.FC<PlayerStatsType> = ({playerStats}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {playerStats.map(s => <PlayerStat key={s.value+s.color} value={s.value} color={s.color} statName={s.statName} changeStat={s.changeStat} playerName={s.playerName} />)}
        </div>
    )
}