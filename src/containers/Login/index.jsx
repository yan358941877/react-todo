/* module */
import React from 'react'

/* style */
import './style.css'

/*component*/
import SignTitle from '../../components/SignTitle'
import LoginForm from '../../components/LoginForm'

class Login extends React.Component{
    render(){
        return(
            <div id="login-page">
                <SignTitle content='欢迎回来！'/>
                <LoginForm />
            </div>
        )
    }
}

export default Login