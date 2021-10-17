import React from 'react'
import { Theme } from '@material-ui/core'
import { createStyles, WithStyles, withStyles } from '@material-ui/styles'
import { Link } from 'react-router-dom'

const styles = (theme: Theme) =>
    createStyles({
        wrapper: {
            display: 'grid',
        },
    })

interface Props extends WithStyles<typeof styles> {}

const earthdawnBase = '/earthdawn'

const Navbar: React.FC<Props> = ({ classes }) => {
    return (
        <nav className={classes.wrapper}>
            <Link to={earthdawnBase + '/talents'}>Talents</Link>
            <Link to={earthdawnBase + '/character-creation'}>
                Character Creation
            </Link>
        </nav>
    )
}

export default withStyles(styles)(Navbar)
