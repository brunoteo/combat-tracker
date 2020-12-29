import React from "react"
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

type Condition = {
    name: string,
    removeAction: () => void
}

export const ConditionIcon: React.FC<Condition> = ({name, removeAction, children}) => {
    
    return (
      <Tooltip title={name}>
        <IconButton aria-label={name} onClick={removeAction}>
            {children}
        </IconButton>
      </Tooltip>
    )
}


