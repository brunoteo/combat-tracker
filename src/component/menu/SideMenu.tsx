import { Divider, Drawer, IconButton, List } from "@material-ui/core"
import makeStyles from "@material-ui/core/styles/makeStyles";
import clsx from "clsx";
import React from "react"
import { MenuItem } from "../../shared/MenuItem";
import { SideMenuItem } from "./SideMenuItem";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

type SideMenuStyleProps = {
    sideMenuWidth: number,
    sideMenuWidthMobile: number
}

const useStyles = makeStyles((theme) => ({
    drawerPaper: (props: SideMenuStyleProps) => ({
        position: 'relative',
        whiteSpace: 'nowrap',
        width: props.sideMenuWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        [theme.breakpoints.down('sm')]: {
             width: props.sideMenuWidthMobile,
        },
    }),
    drawerPaperClose: (props: SideMenuStyleProps) => ({
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
        [theme.breakpoints.down('sm')]: {
            width: "0px",
        },
    }),
    toolbarIcon: (props: SideMenuStyleProps) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    }),
    paper: (props: SideMenuStyleProps) => ({
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    }),
}));

type SideMenuType = {
    menuItems: MenuItem[],
    isOpen: boolean,
    sideMenuWidth: number,
    sideMenuWidthMobile: number,
    menuAction: () => void
}

export const SideMenu: React.FC<SideMenuType> = ({menuItems, isOpen, sideMenuWidth, sideMenuWidthMobile, menuAction}) => {
    const props = {sideMenuWidth: sideMenuWidth, sideMenuWidthMobile: sideMenuWidthMobile};
    const classes = useStyles(props);

    return (
        <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, {[classes.drawerPaperClose]: !isOpen}),
                }}
                open={isOpen}
            >
            <div className={classes.toolbarIcon}>
                <IconButton onClick={menuAction}>
                    <ChevronLeftIcon/>
                </IconButton>
            </div>
            <Divider />
            <List>
                {
                    menuItems.map(i => {
                        return (
                            <SideMenuItem key={i.textToShow} textToShow={i.textToShow} iconToShow={i.iconToShow} iconSize={i.iconSize} enabled={i.enabled} />
                        );
                    })
                }
            </List>
        </Drawer>
    );
}