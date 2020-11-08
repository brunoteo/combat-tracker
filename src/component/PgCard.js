import Grid from "@material-ui/core/Grid";
import React, {useState} from "react";
import {makeStyles} from '@material-ui/core/styles';
import LinearProgressWithLabel from "./LinearProgressWithLabel";
import {ImMagicWand, RiSwordLine} from "react-icons/all";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import red from "@material-ui/core/colors/red";
import IconButton from "@material-ui/core/IconButton";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import {blue, green} from "@material-ui/core/colors";
import DeleteIcon from '@material-ui/icons/Delete';
import HpDialog from "./HpDialog";

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
        backgroundColor: red[500],
    },
    initiative: {
        backgroundColor: green[500],
    },
    armor: {
        backgroundColor: blue[500],
    },
    card: {
        padding: "8px",
    }
}));

export default function PgCard({name, maxHp, currentHp, armor, initiative, removePg, handleHp, changeHpRef, hpNameRef}) {
    const classes = useStyles();

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);

    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <Card>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            PG
                        </Avatar>
                    }
                    title={name}
                    className={classes.cardHeader}
                    action={
                        <IconButton aria-label="remove" onClick={() => removePg(name)}>
                            <DeleteIcon/>
                        </IconButton>}
                />
                <CardContent className={classes.card}>
                    <Grid container spacing={1} alignItems="center" justify="center">
                        <Grid item xs={8}>
                            <LinearProgressWithLabel currentHp={currentHp} maxHp={maxHp}/>
                        </Grid>
                        <Grid item xs={2} align="center">
                            <Avatar aria-label="recipe" className={classes.armor}>
                                {armor}
                            </Avatar>
                        </Grid>
                        <Grid item xs={2} align="center">
                            <Avatar aria-label="recipe" className={classes.initiative}>
                                {initiative}
                            </Avatar>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="Attack" onClick={handleClickOpen}>
                        <RiSwordLine/>
                    </IconButton>
                    <HpDialog changeHpRef={changeHpRef} open={open} handleHp={handleHp} handleClose={handleClose}
                              name={name} currentHp={currentHp} hpNameRef={hpNameRef}/>
                    <IconButton aria-label="Conditions" disabled={true}>
                        <ImMagicWand/>
                    </IconButton>
                </CardActions>
            </Card>
        </div>
    )
}