import React from 'react'
import { Card, Theme, Paper, Typography } from '@material-ui/core'
import { createStyles, WithStyles, withStyles } from '@material-ui/styles'
import { Talent } from '../../redux/Talents/types'
import { fontNewsCycle, fontRaleway } from '../../util/theme'
const styles = (theme: Theme) =>
    createStyles({
        card: {
            margin: '2rem',
            padding: '.5rem 1rem',
        },
        details: {
            display: 'flex',
            '&>*': {
                //all children
                margin: '0 1rem 0 0',
            },
        },
        description: {
            fontFamily: fontRaleway,
            margin: '.5rem 0',
            whiteSpace: 'pre-wrap',
        },
    })

interface Props extends WithStyles<typeof styles> {
    talent: Talent
}

const yesOrNo = (value: boolean): string => {
    return value ? 'Yes' : 'No'
}

const TalentDetail: React.FC<Props> = ({ classes, talent }) => {
    const {
        name,
        requiresKarma,
        attribute,
        baseModifier,
        action,
        skillUse,
        strain,
        description,
    } = talent

    return (
        <Paper className={classes.card} elevation={5}>
            <h3>{name}</h3>
            <Typography>
                <p>
                    {`Base Step: ${attribute.toUpperCase()}` +
                        `${!!baseModifier ? ` + ${baseModifier}` : ''}`}
                </p>
            </Typography>
            <div className={classes.details}>
                <span>Strain: {strain}</span>
                <span>Requires Karma: {yesOrNo(requiresKarma)}</span>
                <span>Action: {yesOrNo(action)}</span>
                <span>Skill Use: {yesOrNo(skillUse)}</span>
            </div>
            <Typography variant="subtitle1">Description</Typography>
            <Typography variant="body1" className={classes.description}>
                {description}
            </Typography>
        </Paper>
    )
}

export default withStyles(styles)(TalentDetail)
