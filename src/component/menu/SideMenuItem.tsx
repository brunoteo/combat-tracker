import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core"
import React from "react"
import { MenuItem } from "../../shared/MenuItem"

export const SideMenuItem: React.FC<MenuItem> = ({textToShow, iconToShow, iconSize, enabled}) => {
    return (
        <ListItem button disabled={!enabled}>
            <ListItemIcon>
                {iconToShow({size: iconSize})}
            </ListItemIcon>
            <ListItemText primary={textToShow} />
        </ListItem>
    )
}