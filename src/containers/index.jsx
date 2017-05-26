import React from 'react'
import { hashHistory } from 'react-router'
import './style.css'

class App extends React.Component {


    render() {
        return (
            <div id='app'>
                <div id='container'>
                    {
                        this.props.children
                    }
                </div>

            </div>

        )
    }
}

export default App