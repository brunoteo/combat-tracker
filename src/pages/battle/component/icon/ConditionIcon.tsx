import React from "react"
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

type Condition = {
    name: string
}

export const ConditionIcon: React.FC<Condition> = ({name, children}) => {
    
    return (
      <Tooltip title={name}>
        <IconButton aria-label={name}>
            {children}
        </IconButton>
      </Tooltip>
    )
}


