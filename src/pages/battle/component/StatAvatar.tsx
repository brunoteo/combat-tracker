import React from "react";
import {Avatar} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";

type StatAvatarStyle = {
    color: string
}

type StatAvatarType = {
    color: string,
    value: number
}

const useStyles = makeStyles((theme) => ({
    root: (props: StatAvatarStyle) => ({
        backgroundColor: props.color,
    })
}))

export const StatAvatar: React.FC<StatAvatarType> = ({color, value}) => {
    const classes = useStyles({ color });

    return <Avatar className={classes.root} >{value}</Avatar>;
};