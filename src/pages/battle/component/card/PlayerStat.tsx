import { Button, Modal, TextField } from "@material-ui/core"
import makeStyles from "@material-ui/core/styles/makeStyles";
import React, { FormEvent } from "react"
import { useInput } from "../../hooks/useInput";

const useStyles = makeStyles((theme) => ({
    root: {
        cursor: "pointer",
    },
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

type ModalStatType = {
    modalStatTitle: string,
    changeStat: (amountToAdd: number) => void,
}

export const PlayerStat: React.FC<ModalStatType> = ({modalStatTitle, changeStat, children }) => {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const {inputValue: statValue, onChange: handleStatChange, reset: resetStatValue} = useInput(0);
    
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleStat = (e: FormEvent) => {
        e.preventDefault();
        changeStat(statValue);
        resetStatValue();
        handleClose();
    };

    const handleCloseButton = (e: FormEvent) => {
        e.preventDefault();
        resetStatValue();
        handleClose();
    };

    return (
        <div>
            <div className={classes.root} onClick={handleOpen}>
                {children}
            </div>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <div className={classes.paper}>
                    <h2>Change {modalStatTitle}</h2>
                    <form onSubmit={handleStat} className={classes.form}
                        autoComplete="off">
                        <TextField
                            value={statValue}
                            onChange={handleStatChange}
                            onFocus={e => e.currentTarget.select()}
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
    )
}