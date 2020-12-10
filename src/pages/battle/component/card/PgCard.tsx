import Grid from "@material-ui/core/Grid";
import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import {LinearProgressWithLabel} from "../../../../shared/component/progressbar/LinearProgressWithLabel";
import {BsFillPersonFill, FaSkull, ImMagicWand} from "react-icons/all";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import red from "@material-ui/core/colors/red";
import IconButton from "@material-ui/core/IconButton";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import {blue, green} from "@material-ui/core/colors";
import DeleteIcon from '@material-ui/icons/Delete';
import clsx from "clsx";
import {ChangeHpModal} from "../modal/ChangeHpModal";
import { FC } from "react";
import { PlayerStats } from "./PlayerStats";
import { usePlayerCards } from "../../hooks/PlayerCardProvider";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(1),
        maxWidth: 500,
        margin: 'auto',
    },
    cardHeader: {
        padding: "8px",
        backgroundColor: theme.palette.primary.light
    },
    avatar: {
        backgroundColor: green[500],
    },
    avatarDead: {
        backgroundColor: red[500],
    },
    cardContent: {
        marginLeft: "8px",
        marginRight: "8px"
    },
    death: {
        backgroundColor: red[300]
    },
    currentCard: {
        borderWidth: "medium",
        borderStyle: "solid"
    },
}));

type PgCardType = {
    name: string,
    maxHp: number,
    currentHp: number,
    armor: number
    initiative: number,
    isCurrentTurn: boolean,
    removePlayerCard: (name: string) => void
}

export const PgCard: FC<PgCardType> = ({name, maxHp, currentHp, armor, initiative, isCurrentTurn, removePlayerCard}) => {
    const classes = useStyles()
    const {changeArmor, changeInitiative} = usePlayerCards();

    const isAlive = currentHp > 0

    return (
        <div className={classes.root}>
            <Card className={clsx({[classes.death]: !isAlive, [classes.currentCard]: (isCurrentTurn)})}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={clsx(classes.avatar, {[classes.avatarDead]: !isAlive})}>
                            {isAlive ? <BsFillPersonFill/> : <FaSkull/> }
                        </Avatar>
                    }
                    title={name}
                    className={classes.cardHeader}
                    action={
                        <IconButton aria-label="remove" onClick={() => removePlayerCard(name)}>
                            <DeleteIcon/>
                        </IconButton>}
                />
                <CardContent className={classes.cardContent}>
                    <Grid container spacing={1} alignItems="center" justifyContent="space-around">
                        <Grid item sm={8} xs={12}>
                            <LinearProgressWithLabel currentHp={currentHp} maxHp={maxHp}/>
                        </Grid>
                        <Grid item sm={4} xs={12}>
                            <PlayerStats playerStats={[
                                {value: armor, color: blue[500], playerName: name, statName: "armor", changeStat: changeArmor},
                                {value: initiative, color: green[500], playerName: name, statName: "initiative", changeStat: changeInitiative},
                            ]} />
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions disableSpacing>
                    <ChangeHpModal name={name} />
                    <IconButton aria-label="Conditions" disabled={true}>
                        <ImMagicWand/>
                    </IconButton>
                </CardActions>
            </Card>
        </div>
    )
}