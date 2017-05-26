import React from 'react'
import './style.css'
import {Link} from 'react-router'

class LoginForm extends React.PureComponent{
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: ''
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
    handleSubmit(){
        const username = this.state.username
        const password = this.state.password
        if(!username){
            alert('请填写用户名')
            return
        }
        if(!password){
            alert('请填写密码')
            return
        }

        if(this.props.handleSubmit){
            this.props.handleSubmit(username, password)
        }
    }
    render(){
        return (
            <div id="login-form-container">
                <div id="username">
                    <p>用户名或邮箱</p>
                    <input 
                        type="text" 
                        placeholder="请输入用户名或邮箱" 
                        onChange={this.handleUsernameChange.bind(this)}
                        value={this.state.username}/>
                </div>
                <div id="password">
                    <p>密码</p>
                    <input 
                        type="password" 
                        placeholder="请输入密码"
                        onChange={this.handlePasswordChange.bind(this)}
                        value={this.state.password}/>
                </div>
                <div id="submit">
                    <span className="btn-login" onClick={this.handleSubmit.bind(this)}>登录</span>
                    <div className="float-right">
                        <span className="">还没有账号？</span>
                        <Link to='/signup'>
                            <span className="link-signup">马上注册</span>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
export default LoginForm