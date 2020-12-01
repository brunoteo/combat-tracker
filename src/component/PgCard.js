import Grid from "@material-ui/core/Grid";
import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import LinearProgressWithLabel from "./LinearProgressWithLabel";
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
import SimpleModal from "./modal/SimpleModal";

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
    initiative: {
        backgroundColor: green[500],
    },
    armor: {
        backgroundColor: blue[500],
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

export default function PgCard({name, maxHp, currentHp, armor, initiative, status, isCurrentTurn, removePg}) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Card className={clsx({[classes.death]: (status === "dead"), [classes.currentCard]: (isCurrentTurn)})}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={clsx(classes.avatar, {[classes.avatarDead]: (status === "dead")})}>
                            {(status === "dead") ? <FaSkull/> : <BsFillPersonFill/>}
                        </Avatar>
                    }
                    title={name}
                    className={classes.cardHeader}
                    action={
                        <IconButton aria-label="remove" onClick={() => removePg(name)}>
                            <DeleteIcon/>
                        </IconButton>}
                />
                <CardContent className={classes.cardContent}>
                    <Grid container spacing={1} alignItems="center" justify="center">
                        <Grid item sm={8} xs={12}>
                            <LinearProgressWithLabel currentHp={currentHp} maxHp={maxHp}/>
                        </Grid>
                        <Grid item sm={2} xs={6} align="center">
                            <Avatar aria-label="recipe" className={classes.armor}>
                                {armor}
                            </Avatar>
                        </Grid>
                        <Grid item sm={2} xs={6} align="center">
                            <Avatar aria-label="recipe" className={classes.initiative}>
                                {initiative}
                            </Avatar>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions disableSpacing>
                    <SimpleModal name={name} />
                    <IconButton aria-label="Conditions" disabled={true}>
                        <ImMagicWand/>
                    </IconButton>
                </CardActions>
            </Card>
        </div>
    )
}