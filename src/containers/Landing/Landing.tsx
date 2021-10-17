import React from "react";
import { Theme } from "@material-ui/core";
import { createStyles, WithStyles, withStyles } from "@material-ui/styles";
import { RouteComponentProps } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const styles = (theme: Theme) => createStyles({});

interface Props extends RouteComponentProps, WithStyles<typeof styles> {}

const Landing: React.FC<Props> = ({ classes }) => {
  return <Navbar />;
};

export default withStyles(styles)(Landing);
