import React from 'react'
import './style.css'

class App extends React.Component{
    render(){
        return (
            <div>
                <h1>hello react</h1>
                {
                    this.props.children
                }
            </div>
            
        )
    }
}

export default App