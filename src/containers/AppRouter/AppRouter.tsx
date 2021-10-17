import React from 'react'
import { Route } from 'react-router-dom'
import { getXCSRFToken } from '../../util/cookie'
import Login from '../Login/Login'
import Landing from '../AppLanding/AppLanding'
import { EarthdawnRouter } from '../EarthDawn/Router/Router'

const AppRouter: React.FC = () => {
    const hasXCSRFToken = !!getXCSRFToken()
    return (
        <>
            {hasXCSRFToken ? (
                // this should be to check if the token xcsrf token is still valid ( hasn't expired ) before routing
                <Route exact path="/" component={Landing} />
            ) : (
                <Route exact path="/" component={Login} />
            )}
            <Route exact path="/login" component={Login} />
            <Route path="/earthdawn" component={EarthdawnRouter} />
        </>
    )
}

export default AppRouter
