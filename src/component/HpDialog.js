import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";

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
}));

export default function HpDialog({open, name, handleClose, handleHp, changeHpRef, hpNameRef}) {
    const classes = useStyles();

    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Add/Remove Hp</DialogTitle>
            <DialogContent>
                <Container component="main" maxWidth="xs">
                    <CssBaseline/>
                    <div className={classes.paper}>
                        <form id="hp-form" onSubmit={handleHp} className={classes.form} noValidate
                              autoComplete="off">
                            <TextField
                                inputRef={hpNameRef}
                                type="hidden"
                                value={name}
                            />
                            <TextField
                                inputRef={changeHpRef}
                                variant="outlined"
                                required
                                fullWidth
                                label="Insert value"
                                type="number"
                            />
                        </form>
                    </div>
                </Container>
            </DialogContent>
            <DialogActions>
                <Button type="submit" form="hp-form" color="primary" onClick={handleClose}>
                    Change
                </Button>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    );
}