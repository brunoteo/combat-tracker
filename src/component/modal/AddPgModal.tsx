import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {useInput} from "../../hooks/useInput"
import {usePlayerCards} from "../../hooks/PlayerCardProvider"
import Grid from "@material-ui/core/Grid";
import AddIcon from "@material-ui/icons/Add";
import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";
import { FormEvent } from 'react';

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(1, 3, 1),
        top: `50%`,
        left: `50%`,
        transform: `translate(-50%, -50%)`,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    buttons: {
        textAlign: "right",
        marginTop: theme.spacing(1),
    },
    fab: {
        margin: theme.spacing(1),
        position: "fixed",
        bottom: theme.spacing(6),
        right: theme.spacing(2),
        zIndex: 1000
    }
}));

export default function AddPgModal() {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const nameInput = useInput("");
    const hpInput = useInput("");
    const armorInput = useInput("");
    const initiativeInput = useInput("");

    const {addPlayerCard} = usePlayerCards();

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleNewPg = (e: FormEvent) => {
        e.preventDefault()

        addPlayerCard(nameInput.inputValue, Number(hpInput.inputValue), Number(armorInput.inputValue), Number(initiativeInput.inputValue))

        nameInput.reset()
        hpInput.reset()
        armorInput.reset()
        initiativeInput.reset()

        handleClose();
    }

    const handleCloseButton = (e: FormEvent) => {
        e.preventDefault()

        nameInput.reset()
        hpInput.reset()
        armorInput.reset()
        initiativeInput.reset()

        handleClose()
    }

    return (
        <div>
            <Fab
                className={classes.fab}
                color="primary"
                aria-label="add"
            >
                <Tooltip title={"Add new character"}>
                    <AddIcon onClick={handleOpen} color="inherit"/>
                </Tooltip>
            </Fab>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <div className={classes.paper}>
                    <h2>Add new character</h2>
                    <form onSubmit={handleNewPg} className={classes.form}
                          autoComplete="off">
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    value={nameInput.inputValue}
                                    onChange={nameInput.onChange}
                                    autoFocus
                                    variant="outlined"
                                    required
                                    fullWidth
                                    label="Name"
                                    type="text"
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    value={hpInput.inputValue}
                                    onChange={hpInput.onChange}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    label="HP"
                                    type="number"
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    value={armorInput.inputValue}
                                    onChange={armorInput.onChange}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    label="Armor"
                                    type="number"
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    value={initiativeInput.inputValue}
                                    onChange={initiativeInput.onChange}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    label="Initiative"
                                    type="number"
                                />
                            </Grid>
                        </Grid>
                        <div className={classes.buttons}>
                            <Button type="submit" color="primary">
                                Change
                            </Button>
                            <Button color="primary" onClick={handleCloseButton}>
                                Cancel
                            </Button>
                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    );
}
