import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {FaCampground, GiBlackKnightHelm, GiSpikedDragonHead, RiSwordLine} from "react-icons/all";

export const mainListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <RiSwordLine size="30"/>
            </ListItemIcon>
            <ListItemText primary="Quick Battle"/>
        </ListItem>
        <ListItem button disabled={true}>
            <ListItemIcon>
                <FaCampground size="30"/>
            </ListItemIcon>
            <ListItemText primary="Campaigns"/>
        </ListItem>
        <ListItem button disabled={true}>
            <ListItemIcon>
                <GiBlackKnightHelm size="30"/>
            </ListItemIcon>
            <ListItemText primary="Characters"/>
        </ListItem>
        <ListItem button disabled={true}>
            <ListItemIcon>
                <GiSpikedDragonHead size="30"/>
            </ListItemIcon>
            <ListItemText primary="Enemies"/>
        </ListItem>
    </div>
);
