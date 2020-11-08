import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import React from "react";

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

export default function AddPgDialog({open, handleClose, addPg, nameRef, hpRef, armorRef, initiativeRef}) {
    const classes = useStyles();

    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Add character</DialogTitle>
            <DialogContent>
                <Container component="main" maxWidth="xs">
                    <CssBaseline/>
                    <div className={classes.paper}>
                        <form id="add-form" onSubmit={addPg} className={classes.form} noValidate autoComplete="off">
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        inputRef={nameRef}
                                        variant="outlined"
                                        required
                                        fullWidth
                                        label="Name"
                                        type="text"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        inputRef={hpRef}
                                        variant="outlined"
                                        required
                                        fullWidth
                                        label="HP"
                                        type="number"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        inputRef={armorRef}
                                        variant="outlined"
                                        required
                                        fullWidth
                                        label="Armor"
                                        type="number"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        inputRef={initiativeRef}
                                        variant="outlined"
                                        required
                                        fullWidth
                                        label="Initiative"
                                        type="number"
                                    />
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </Container>
            </DialogContent>
            <DialogActions>
                <Button type="submit" form="add-form" color="primary">
                    Add
                </Button>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    );
}