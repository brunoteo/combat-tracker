import "./App.css";
import React from "react";
import { Provider } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Menu } from "./shared/component/menu/Menu";
import { BattlePage } from "./pages/battle/BattlePage";
import { store } from "./store/store";

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
          <Provider store={store}>
            <BattlePage />
          </Provider>
        </Container>
      </main>
    </div>
  );
}

export default App;
