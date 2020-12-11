import Grid from "@material-ui/core/Grid";
import React, {FC} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {LinearProgressWithLabel} from "../progressbar/LinearProgressWithLabel";
import {
    BsFillPersonFill,
    FaSkull,
    ImMagicWand,
    RiSwordLine,
} from "react-icons/all";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import red from "@material-ui/core/colors/red";
import IconButton from "@material-ui/core/IconButton";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import {blue, green} from "@material-ui/core/colors";
import DeleteIcon from "@material-ui/icons/Delete";
import clsx from "clsx";
import {usePlayerCards} from "../../hooks/PlayerCardProvider";
import {PlayerStat} from "./PlayerStat";
import {StatAvatar} from "../StatAvatar";
import Tooltip from "@material-ui/core/Tooltip";
import shield from "../../../../images/shield.png";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(1),
        maxWidth: 500,
        margin: "auto",
    },
    cardHeader: {
        padding: "8px",
        backgroundColor: theme.palette.primary.light,
    },
    avatar: {
        backgroundColor: green[500],
    },
    avatarDead: {
        backgroundColor: red[500],
    },
    cardContent: {
        marginLeft: "8px",
        marginRight: "8px",
    },
    death: {
        backgroundColor: red[300],
    },
    currentCard: {
        borderWidth: "medium",
        borderStyle: "solid",
    },
    stats: {
        display: "flex",
        justifyContent: "space-around",
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
    const {changeArmor, changeHp, changeInitiative} = usePlayerCards();

    const isAlive = currentHp > 0

    return (
        <div className={classes.root}>
            <Card className={clsx({[classes.death]: !isAlive, [classes.currentCard]: (isCurrentTurn)})}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={clsx(classes.avatar, {[classes.avatarDead]: !isAlive})}>
                            {isAlive ? <BsFillPersonFill/> : <FaSkull/>}
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
                            <div className={classes.stats}>
                                <PlayerStat playerName={name} statName="armor" value={armor} changeStat={changeArmor}>
                                    <StatAvatar imagePath={shield} value={armor}/>
                                </PlayerStat>
                                <PlayerStat playerName={name} statName="initiative" value={initiative}
                                            changeStat={changeInitiative}>
                                    <StatAvatar imagePath={shield} value={initiative}/>
                                </PlayerStat>
                            </div>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions disableSpacing>
                    <PlayerStat playerName={name} statName="HP" value={currentHp} changeStat={changeHp}>
                        <Tooltip title={"Change HP"}>
                            <IconButton aria-label="Attack">
                                <RiSwordLine/>
                            </IconButton>
                        </Tooltip>
                    </PlayerStat>
                    <IconButton aria-label="Conditions" disabled={true}>
                        <ImMagicWand/>
                    </IconButton>
                </CardActions>
            </Card>
        </div>
    )
}