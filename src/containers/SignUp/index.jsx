/* module */
import React from 'react'

/* style */
import './style.css'

/*component*/
import SignTitle from '../../components/SignTitle'
import SignUpForm from '../../components/SignUpForm'

class SignUp extends React.Component{
    render(){
        return(
            <div id="signup-page">
                <SignTitle content='欢迎加入！'/>
                <SignUpForm />
            </div>
        )
    }
}

export default SignUp