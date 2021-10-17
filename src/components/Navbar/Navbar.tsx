import React from "react";
import { Theme } from "@material-ui/core";
import { createStyles, WithStyles, withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

const styles = (theme: Theme) => createStyles({});

interface Props extends WithStyles<typeof styles> {}

const Navbar: React.FC<Props> = ({ classes }) => {
  return (
    <nav>
      <Link to="/talents">Talents</Link>
    </nav>
  );
};

export default withStyles(styles)(Navbar);
