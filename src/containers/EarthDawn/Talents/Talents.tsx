import React, { useEffect } from 'react'
import { createStyles, WithStyles, withStyles } from '@material-ui/styles'
import { RouteComponentProps } from 'react-router-dom'
import { History } from 'history'
import { Theme } from '@material-ui/core'
import { connect } from 'react-redux'

import * as actions from '../../../redux/actions'
import { AppState } from '../../../redux/rootReducer'
import { GetAllTalentsAction, Talent } from '../../../redux/Talents/types'
import TalentDetail from '../../../components/EarthDawn/TalentDetail/TalentDetail'

const styles = (theme: Theme) => createStyles({})

interface Props extends RouteComponentProps, WithStyles<typeof styles> {
    getAllTalents: (history: History) => GetAllTalentsAction
    talents: Talent[]
}

const Talents: React.FC<Props> = ({
    classes,
    getAllTalents,
    history,
    talents,
}) => {
    useEffect(() => {
        getAllTalents(history)
    }, [getAllTalents, history])

    return (
        <main>
            {talents.map((talent) => {
                return <TalentDetail talent={talent} />
            })}
        </main>
    )
}

const mSTP = (state: AppState) => {
    return {
        talents: state.talents,
    }
}

export default connect(mSTP, actions)(withStyles(styles)(Talents))
