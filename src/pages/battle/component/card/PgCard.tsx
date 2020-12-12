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
import {green} from "@material-ui/core/colors";
import DeleteIcon from "@material-ui/icons/Delete";
import clsx from "clsx";
import {PlayerStat} from "./PlayerStat";
import {StatAvatar} from "../StatAvatar";
import Tooltip from "@material-ui/core/Tooltip";
import shield from "../../../../images/shield.png";
import {useDispatch} from "react-redux";
import {changeArmor, changeHp, changeInitiative, removePlayer} from "../../../../store/store";

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

//TODO non posso dirgli che ha un player?
type PgCardType = {
    id: string,
    name: string,
    maxHp: number,
    currentHp: number,
    armor: number
    initiative: number,
    isCurrentTurn: boolean
}

export const PgCard: FC<PgCardType> = ({id, name, maxHp, currentHp, armor, initiative, isCurrentTurn}) => {
    const classes = useStyles()
    const dispatch = useDispatch();

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
                        <IconButton aria-label="remove" onClick={() => dispatch(removePlayer(id))}>
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
                                <PlayerStat modalStatTitle={`${name} armor`} changeStat={(amountToAdd) => dispatch(changeArmor({id, amountToAdd}))} >
                                    <StatAvatar imagePath={shield} value={armor}/>
                                </PlayerStat>
                                <PlayerStat modalStatTitle={`${name} initiative`} changeStat={(amountToAdd) => dispatch(changeInitiative({id, amountToAdd}))} >
                                    <StatAvatar imagePath={shield} value={initiative}/>
                                </PlayerStat>
                            </div>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions disableSpacing>
                    <PlayerStat modalStatTitle={`${name} HP`} changeStat={(amountToAdd) => dispatch(changeHp({id, amountToAdd}))}>
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