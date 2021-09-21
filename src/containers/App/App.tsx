import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";

import { Router } from "../Router/Router";
import {
  createStyles,
  Theme,
  ThemeProvider,
  withStyles,
  WithStyles,
} from "@material-ui/core";
import { darkpondTheme } from "../../util/theme";

const styles = (theme: Theme) =>
  createStyles({
    wrapper: {
      margin: 0,
      height: "100vh",
      width: "100vw",
    },
  });

interface Props extends WithStyles<typeof styles> {}

const App: React.FC<Props> = ({ classes }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={darkpondTheme}>
          <div className={classes.wrapper}>
            <Route path="/" component={Router} />
          </div>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default withStyles(styles)(App);
