import Grid from "@material-ui/core/Grid";
import React from "react";
import {Typography} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
    },
}));


export default function Card({name, hp, initiative}) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={2} >
                    <Grid item xs={8} container spacing={2} direction="column">
                        <Grid item xs={12}>
                            <Typography variant="h5">
                                {name}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body2">
                                {hp}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={4} container alignItems="center">
                        <Grid item xs>
                            <Typography variant="h5" align="center">
                                {initiative}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}