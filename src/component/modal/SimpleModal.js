import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import IconButton from "@material-ui/core/IconButton";
import { RiSwordLine } from "react-icons/all";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useInput } from "../../hooks/useInput"
import { usePlayerCards } from "../../hooks/PlayerCardProvider"

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
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
    },
}));

export default function SimpleModal({name}) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [hpValue, resetHp] = useInput(0);
    const {changeHp} = usePlayerCards();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleHp = e => {
        e.preventDefault();
        changeHp(name, hpValue.value)
        resetHp();
        handleClose();
    };

    const handleCloseButton = e => {
        e.preventDefault();
        resetHp();
        handleClose();
    };

    return (
        <div>
            <IconButton aria-label="Attack" onClick={handleOpen}>
                <RiSwordLine />
            </IconButton>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div className={classes.paper}>
                    <h2>Change {name} HP</h2>
                    <form onSubmit={handleHp} className={classes.form}
                        autoComplete="off">
                        <TextField
                            {...hpValue}
                            autoFocus
                            variant="outlined"
                            required
                            fullWidth
                            label="Insert value"
                            type="number"
                        />
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
