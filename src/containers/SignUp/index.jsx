/* module */
import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {hashHistory} from 'react-router'
/* style */
import './style.css'

/*component*/
import SignTitle from '../../components/SignTitle'
import SignUpForm from '../../components/SignUpForm'

/* ActionCreator */
import * as userinfo_actionCreator from '../../actions/userinfo'
/*leanCloud*/
import lcSignup from '../../leancloud/lcSignup'


class SignUp extends React.Component{
    // 当用户提交Login表单时的处理
    handleSubmit(username, password, email){
        const handleSignupSuccess = this.handleSignupSuccess.bind(this)
        lcSignup(username, password, email,handleSignupSuccess)
    }
    
    // 当用户信息验证成功时
    handleSignupSuccess(username, userID){
        // 当用户验证成功时，首先将用户信息存放到store和localStorage中
        this.props.userinfo_operator.updateUser({username, userID})
        localStorage.setItem('username', username)
        localStorage.setItem('userID', userID)
        // 然后再将页面跳转到todo部分
        hashHistory.push('/todo')
    }
    render(){
        return(
            <div id="signup-page">
                <SignTitle content='欢迎加入！'/>
                <SignUpForm handleSubmit={this.handleSubmit.bind(this)}/>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {}
}
const mapDispatchToProps = (dispatch)=>{
    return {
        userinfo_operator: bindActionCreators(userinfo_actionCreator, dispatch)
    }
}
SignUp = connect(mapStateToProps, mapDispatchToProps)(SignUp)
export default SignUp