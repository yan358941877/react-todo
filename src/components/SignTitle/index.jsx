import React from 'react'
import './style.css'

class SignTitle extends React.PureComponent{
    render(){
        return (
            <div id="sign-title">
                <div id="title-content">
                    <span>Days Todo</span>
                    <span>{this.props.content}</span>
                </div>
            </div>
        )
    }
}
export default SignTitle