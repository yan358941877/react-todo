import React from 'react'
import './style.css'
import {Link} from 'react-router'

class LoginForm extends React.PureComponent{
    render(){
        return (
            <div id="login-form-container">
                <div id="username">
                    <p>用户名或邮箱</p>
                    <input type="text" placeholder="请输入用户名或邮箱"/>
                </div>
                <div id="password">
                    <p>密码</p>
                    <input type="password" placeholder="请输入密码"/>
                </div>
                <div id="submit">
                    <span className="btn-login">登录</span>
                    <div className="float-right">
                        <span className="">还没有账号？</span>
                        <Link to='/signup'><span className="link-signup">马上注册</span></Link>
                    </div>
                </div>
            </div>
        )
    }
}
export default LoginForm