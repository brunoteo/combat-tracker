import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

type StatAvatarStyle = {
    imagePath: string
}

type StatAvatarType = {
    imagePath: string,
    value: number
}

const useStyles = makeStyles((theme) => ({
    root: (props: StatAvatarStyle) => ({
        width: "50px",
        height: "50px",
        [theme.breakpoints.down('sm')]: {
            width: "40px",
            height: "40px",
        },
        backgroundImage: `url(${props.imagePath})`,
        backgroundSize: "cover",
        position: "relative",
    }),
    child: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: `translate(-50%, -50%)`,
        fontSize: "14pt",
        [theme.breakpoints.down('sm')]: {
            fontSize: "12pt",
        }
    }
}))

export const StatAvatar: React.FC<StatAvatarType> = ({imagePath, value}) => {
    const classes = useStyles({ imagePath });

    return (
        <div className={classes.root}>
            <div className={classes.child}>
                {value}
            </div>
        </div>
    )
};