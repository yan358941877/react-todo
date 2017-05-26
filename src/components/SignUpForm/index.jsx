import React from 'react'
import './style.css'
import {Link} from 'react-router'

class SignUpForm extends React.PureComponent{
    constructor(props){
        super(props)
        this.state={
            username: '',
            password: '',
            repassword: '',
            email: ''
        }
    }

    handleUsernameChange(event){
        const username = event.target.value
        this.setState({
            username
        })
    }

    handlePasswordChange(event){
        const password = event.target.value
        this.setState({
            password
        })
    }

    handleRepasswordChange(event){
        const repassword = event.target.value
        this.setState({
            repassword
        })
    }
    handleEmailChange(event){
        const email = event.target.value
        this.setState({
            email
        })
    }
    handleSubmit(){
        const username = this.state.username
        const password = this.state.password
        const repassword = this.state.repassword
        const email = this.state.email

        if(!username||username.length === 0){
            alert('请输入用户名')
            return
        }
        if(!password||password.length === 0){
            alert('请输入密码')
            return
        }
        if(!repassword||repassword.length === 0 ){
            alert('请再次输入密码')
            return
        }
        if(!email||email.length === 0){
            alert('请输入邮箱')
            return
        }
        if(password!== repassword){
            alert('两次密码输入不一致')
            return
        }

        if(this.props.handleSubmit){
            this.props.handleSubmit(username, password, email)
        }
    }
    render(){
        return (
            <div id="sign-form-container">
                <div id="username">
                    <p>用户名</p>
                    <input 
                        type="text" 
                        placeholder="请输入用户名或邮箱"
                        value={this.state.username}
                        onChange={this.handleUsernameChange.bind(this)}/>
                </div>
                <div id="password">
                    <p>密码</p>
                    <input 
                        type="password" 
                        placeholder="请输入密码"
                        value={this.state.password}
                        onChange={this.handlePasswordChange.bind(this)}/>
                </div>
                <div id="repassword">
                    <p>确认密码</p>
                    <input 
                        type="password" 
                        placeholder="请再次输入密码"
                        value={this.state.repassword}
                        onChange={this.handleRepasswordChange.bind(this)}/>
                </div>
                <div id="email">
                    <p>邮箱</p>
                    <input 
                        type="text" 
                        placeholder="请输入邮箱"
                        value={this.state.email}
                        onChange={this.handleEmailChange.bind(this)}/>
                </div>
                <div id="submit">
                    <span className="btn-signup" onClick={this.handleSubmit.bind(this)}>注册</span>
                    <div className="float-right">
                        <span className="">已有账号？</span>
                        <Link to='/login'>
                            <span className="link-login">马上登录</span>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
export default SignUpForm