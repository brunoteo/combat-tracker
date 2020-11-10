import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import React, {useState} from "react";
import AddPgForm from "./AddPgForm";
import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    fab: {
        margin: theme.spacing(1),
        position: "fixed",
        bottom: theme.spacing(6),
        right: theme.spacing(2),
        zIndex: 1000
    },
}));

export default function AddPgDialog({addPg, nameRef, hpRef, armorRef, initiativeRef}) {
    const classes = useStyles();

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <Fab
            className={classes.fab}
            color="primary"
            aria-label="add"
        >
            <Tooltip title={"Add new character"}>
                <AddIcon color="inherit" onClick={handleClickOpen}/>
            </Tooltip>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add character</DialogTitle>
                <DialogContent>
                    <AddPgForm addPg={addPg} nameRef={nameRef} hpRef={hpRef} armorRef={armorRef}
                               initiativeRef={initiativeRef}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button type="submit" form="add-form" color="primary" onClick={handleClose}>
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </Fab>
    );
}