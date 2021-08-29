import React from "react";
import {
  createStyles,
  TextField,
  Theme,
  withStyles,
  WithStyles,
} from "@material-ui/core";

import darkpondBackground from "../../images/darkpond-background.png";

const styles = (theme: Theme) =>
  createStyles({
    wrapper: {
      height: "100%",
      width: "100%",
      background: `url("${darkpondBackground}") no-repeat center`,
    },
    form: {
      margin: "auto auto",
    },
  });

interface Props extends WithStyles<typeof styles> {}

const Login: React.FC<Props> = ({ classes }) => {
  return (
    <div className={classes.wrapper}>
      <form className={classes.form}>
        <TextField id="username" label="username" variant="outlined" />
        <TextField id="password" label="password" />
      </form>
    </div>
  );
};

export default withStyles(styles)(Login);
