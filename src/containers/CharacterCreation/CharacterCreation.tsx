import React from "react";
import { Theme } from "@material-ui/core";
import { createStyles, WithStyles, withStyles } from "@material-ui/styles";
import { RouteComponentProps } from "react-router-dom";

const styles = (theme: Theme) => createStyles({});

interface Props extends RouteComponentProps, WithStyles<typeof styles> {}

const CharacterCreation: React.FC<Props> = ({ classes }) => {
  return <div>Character Creation</div>;
};

export default withStyles(styles)(CharacterCreation);
