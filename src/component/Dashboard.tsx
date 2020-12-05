import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {PgCardList} from "./PgCardList";
import Menu from "./Menu";
import { PlayerCardProvider } from '../hooks/PlayerCardProvider';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    title: {
        flexGrow: 1,
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
}));

export default function Dashboard() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Menu/>
            <main className={classes.content}>
                <div className={classes.appBarSpacer}/>
                <Container maxWidth="lg" className={classes.container}>
                    <PlayerCardProvider>
                        <PgCardList/>
                    </PlayerCardProvider>
                </Container>
            </main>
        </div>
    );
}
