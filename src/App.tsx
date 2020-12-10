import "./App.css";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Menu } from "./shared/component/menu/Menu";
import Container from "@material-ui/core/Container";
import { PlayerCardProvider } from "./pages/battle/hooks/PlayerCardProvider";
import { BattlePage } from "./pages/battle/BattlePage";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  title: {
    flexGrow: 1,
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Menu />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <PlayerCardProvider>
            <BattlePage />
          </PlayerCardProvider>
        </Container>
      </main>
    </div>
  );
}

export default App;
