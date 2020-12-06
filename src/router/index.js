import React from 'react'
import { Switch, Route } from 'react-router-dom'
import routesList from './routesList'

const IndexRoute = () => {
    return (
        <Switch>
            {routesList.map((item, index) => {
                return (<Route
                    key={index}
                    path={item.path}
                    exact={item.exact}
                    render={item.render} />)
            })}
        </Switch>
    )
}

export default IndexRoute;