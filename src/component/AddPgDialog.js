import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import React from "react";
import AddPgForm from "./AddPgForm";

export default function AddPgDialog({open, handleClose, addPg, nameRef, hpRef, armorRef, initiativeRef}) {

    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Add character</DialogTitle>
            <DialogContent>
                <AddPgForm addPg={addPg} nameRef={nameRef} hpRef={hpRef} armorRef={armorRef} initiativeRef={initiativeRef} />
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