/*module*/
import React from 'react'
import {Router, Route, hashHistory, IndexRoute} from 'react-router'

/*container and components*/
import App from '../containers'
import Login from '../containers/Login'
import TodoPage from '../containers/TodoPage'

class RouterMap extends React.Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path='/' component={App}>
                    <Route path='/login' component={Login} />
                    <Route path='/todo' component={TodoPage} />
                </Route>
            </Router>
        )
    }
}
export default RouterMap
