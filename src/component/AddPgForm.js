import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(2, 0, 1),
    },
}));

export default function AddPgForm({name, hp, armor, initiative}) {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <form className={classes.form} noValidate autoComplete="off">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                ref={name}
                                variant="outlined"
                                required
                                fullWidth
                                id="name"
                                label="Name"
                                name="name"
                                type="text"
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                ref={hp}
                                name="hp"
                                variant="outlined"
                                required
                                fullWidth
                                id="hp"
                                label="HP"
                                type="number"
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                ref={armor}
                                variant="outlined"
                                required
                                fullWidth
                                id="armor"
                                label="Armor"
                                name="armor"
                                type="number"
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                ref={initiative}
                                variant="outlined"
                                required
                                fullWidth
                                id="initiative"
                                label="Initiative"
                                name="initiative"
                                type="number"
                            />
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}
