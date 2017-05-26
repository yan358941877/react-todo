/*module*/
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

/*container and components*/
import App from '../containers'
import Login from '../containers/Login'
import TodoPage from '../containers/TodoPage'

class RouterMap extends React.Component {
    render() {
        return (
            <Router>
                <App>
                    <Route path='/login' component={Login} />
                    <Route path='/todo' component={TodoPage} />
                </App>
            </Router>
        )
    }
}
export default RouterMap
