import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";
import {
  Button,
  createStyles,
  rgbToHex,
  TextField,
  Theme,
  withStyles,
  WithStyles,
} from "@material-ui/core";

import darkpondBackground from "../../images/darkpond-background.png";
import * as actions from "../../redux/actions";
import { SubmitLoginArgs, SubmitLoginFormAction } from "../../redux/actions";

const styles = (theme: Theme) =>
  createStyles({
    wrapper: {
      height: "100%",
      width: "100%",
      background: `url(${darkpondBackground}) no-repeat center fixed`,
      "-webkit-background-size": "cover",
      "-moz-background-size": "cover",
      "-o-background-size": "cover",
      backgroundSize: "cover",
      display: "grid",
      placeContent: "center center",
    },
    form: {
      backgroundColor: `${rgbToHex(theme.palette.secondary.light)}95`,
      padding: "1.5rem",
      display: "grid",
      gridGap: "2rem",
      placeContent: "center center",
      border: `.1rem solid ${theme.palette.secondary.dark}`,
      borderRadius: ".5rem",
    },
    textField: {
      "& label.Mui-focused": {
        color: theme.palette.primary.contrastText,
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: theme.palette.primary.contrastText,
        },
        "&:hover fieldset": {
          borderColor: theme.palette.primary.contrastText,
        },
        "&.Mui-focused fieldset": {
          borderColor: theme.palette.primary.contrastText,
        },
      },
    },
  });

interface Props extends RouteComponentProps, WithStyles<typeof styles> {
  submitLogin: (args: SubmitLoginArgs) => SubmitLoginFormAction;
}

const Login: React.FC<Props> = ({ classes, history, submitLogin }) => {
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });

  return (
    <div className={classes.wrapper}>
      <form
        className={classes.form}
        onSubmit={(e) => {
          e.preventDefault();
          submitLogin({ loginForm, history });
        }}
      >
        <TextField
          className={classes.textField}
          id="username"
          label="username"
          onChange={(e) => {
            setLoginForm({ ...loginForm, username: e.target.value });
          }}
          value={loginForm.username}
          variant="outlined"
        />
        <TextField
          className={classes.textField}
          id="password"
          label="password"
          onChange={(e) => {
            setLoginForm({ ...loginForm, password: e.target.value });
          }}
          type="password"
          value={loginForm.password}
          variant="outlined"
        />
        <Button color="primary" type="submit" variant="contained">
          Login
        </Button>
      </form>
    </div>
  );
};

export default connect(null, actions)(withStyles(styles)(Login));
