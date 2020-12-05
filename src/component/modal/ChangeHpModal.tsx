import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import IconButton from "@material-ui/core/IconButton";
import {RiSwordLine} from "react-icons/all";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {useInput} from "../../hooks/useInput"
import {usePlayerCards} from "../../hooks/PlayerCardProvider"
import Tooltip from "@material-ui/core/Tooltip";
import { FormEvent } from 'react';
import { FC } from 'react';

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
}));

type ChangeHpType = {
    name: string
}

export const ChangeHpModal: FC<ChangeHpType> = ({name}) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const hpInput = useInput("0");
    const {changeHp} = usePlayerCards();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleHp = (e: FormEvent) => {
        e.preventDefault();
        changeHp(name, Number(hpInput.inputValue));
        hpInput.reset();
        handleClose();
    };

    const handleCloseButton = (e: FormEvent) => {
        e.preventDefault();
        hpInput.reset();
        handleClose();
    };

    return (
        <div>
            <Tooltip title={"Change HP"}>
                <IconButton aria-label="Attack" onClick={handleOpen}>
                    <RiSwordLine />
                </IconButton>
            </Tooltip>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <div className={classes.paper}>
                    <h2>Change {name} HP</h2>
                    <form onSubmit={handleHp} className={classes.form}
                          autoComplete="off">
                        <TextField
                            value={hpInput.inputValue}
                            onChange={hpInput.onChange}
                            autoFocus
                            variant="outlined"
                            required
                            fullWidth
                            label="Insert value"
                            type="number"
                        />
                        <div className={classes.buttons}>
                            <Button type="submit" color="primary">
                                Add
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