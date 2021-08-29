import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";

import { Router } from "../Router/Router";
import {
  createStyles,
  createTheme,
  Theme,
  ThemeProvider,
  withStyles,
  WithStyles,
} from "@material-ui/core";

const theme = createTheme({
  //global theme elements like color etc
});

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
        <ThemeProvider theme={theme}>
          <div className={classes.wrapper}>
            <Route path="/" component={Router} />
          </div>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default withStyles(styles)(App);
