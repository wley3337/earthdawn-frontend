import React from 'react'
import { Theme } from '@material-ui/core'
import { createStyles, WithStyles, withStyles } from '@material-ui/styles'
import { RouteComponentProps, Link } from 'react-router-dom'

const styles = (theme: Theme) => createStyles({})

interface Props extends RouteComponentProps, WithStyles<typeof styles> {}

const Landing: React.FC<Props> = ({ classes }) => {
    return <Link to="/earthdawn">Earthdawn</Link>
}

export default withStyles(styles)(Landing)
