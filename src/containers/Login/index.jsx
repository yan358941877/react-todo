/* module */
import React from 'react'

/* style */
import './style.css'

/*component*/
import SignTitle from '../../components/SignTitle'

class Login extends React.Component{
    render(){
        return(
            <div id="login-page">
                <SignTitle content='欢迎回来！'/>
                
            </div>
        )
    }
}

export default Login