import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import { FormEvent } from "react";
import { FormControl, IconButton, InputLabel, MenuItem, Select } from "@material-ui/core";
import { ImMagicWand } from "react-icons/im";
import { conditions } from "../../../../data/conditions";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1, 3, 1),
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  buttons: {
    textAlign: "right",
    marginTop: theme.spacing(1),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250,
  },
  iconInSelect: {
      marginRight: "15px",
  },
}));

type AddConditionType = {
    addCondition: (conditionName: string) => void,
    activeConditions: string[]
}

export const AddConditionModal: React.FC<AddConditionType> = ({addCondition, activeConditions}) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [conditionValue, setConditionValue] = React.useState<string>("");

  const handleConditionChange = (event: React.ChangeEvent<{ value: string }>) => setConditionValue(event.target.value)
  const resetConditionValue = () => setConditionValue("")

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddCondition = (e: FormEvent) => {
    e.preventDefault()

    addCondition(conditionValue)

    resetConditionValue()
    handleClose()
  };

  const handleCloseButton = (e: FormEvent) => {
    e.preventDefault();

    resetConditionValue();

    handleClose();
  };

  return (
    <div>
      <IconButton aria-label="Conditions" onClick={handleOpen}>
        <ImMagicWand />
      </IconButton>
      <Modal open={open} onClose={handleClose}>
        <div className={classes.paper}>
          <h2>Add new condition</h2>
          <form
            onSubmit={handleAddCondition}
            className={classes.form}
            autoComplete="off"
          >
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="condition-label">Condition</InputLabel>
              <Select
                labelId="condition-label"
                id="condition-select"
                value={conditionValue}
                onChange={handleConditionChange}
                label="Condition"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {conditions
                    .filter(c => !activeConditions.includes(c.name.toLowerCase()))
                    .map((c) => (
                  <MenuItem value={c.name.toLowerCase()} key={c.name + "ToAdd"}>
                    <span className={classes.iconInSelect}>
                        {c.icon({})}
                    </span>
                    {c.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
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
};
