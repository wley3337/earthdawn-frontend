import React from 'react'
import { Route, withRouter, RouteComponentProps } from 'react-router-dom'
import Navbar from '../../../components/EarthDawn/Navbar/Navbar'
import CharacterCreation from '../CharacterCreation/CharacterCreation'
import Talents from '../Talents/Talents'

interface Props extends RouteComponentProps {}

const Router: React.FC<Props> = ({ match }) => {
    const baseUrl = match.url
    return (
        <>
            <Route path={baseUrl} component={Navbar} />
            <Route exact path={baseUrl + '/talents'} component={Talents} />
            <Route
                exact
                path={baseUrl + '/character-creation'}
                component={CharacterCreation}
            />
        </>
    )
}

// Routers exported as constants to keep them findable
export const EarthdawnRouter = withRouter(Router)
