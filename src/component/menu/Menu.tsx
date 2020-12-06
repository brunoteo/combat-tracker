import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import clsx from "clsx";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
import {menuListItems} from "../../data/listItems";
import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { SideMenu } from "./SideMenu";

const sideMenuShift = 240;
const sideMenuShiftMobile = window.screen.width;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: sideMenuShift,
        width: `calc(100% - ${sideMenuShift}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        [theme.breakpoints.down('sm')]: {
            width: `calc(100% - ${sideMenuShiftMobile}px)`,
        },
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
}));

export const Menu = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const openSideMenu = () => {
        setOpen(true);
    };
    const closeSideMenu = () => {
        setOpen(false);
    };

    return (
        <Box className={classes.root}>
            <CssBaseline/>
            <AppBar position="absolute"
                    className={clsx(classes.appBar, {[classes.appBarShift]: open})}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={openSideMenu}
                        className={clsx(classes.menuButton, {[classes.menuButtonHidden]: open})}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        Combat Tracker
                    </Typography>
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <NotificationsIcon/>
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <SideMenu
                menuItems={menuListItems}
                isOpen={open}
                menuAction={closeSideMenu}
                sideMenuWidth={sideMenuShift}
                sideMenuWidthMobile={sideMenuShiftMobile}
            />
        </Box>
    )
}