import React from 'react'
import './style.css'
import {Link} from 'react-router'

class SignUpForm extends React.PureComponent{
    render(){
        return (
            <div id="sign-form-container">
                <div id="username">
                    <p>用户名或邮箱</p>
                    <input type="text" placeholder="请输入用户名或邮箱"/>
                </div>
                <div id="password">
                    <p>密码</p>
                    <input type="password" placeholder="请输入密码"/>
                </div>
                <div id="repassword">
                    <p>确认密码</p>
                    <input type="password" placeholder="请再次输入密码"/>
                </div>
                <div id="email">
                    <p>邮箱</p>
                    <input type="text" placeholder="请输入邮箱"/>
                </div>
                <div id="submit">
                    <span className="btn-signup">注册</span>
                    <div className="float-right">
                        <span className="">已有账号？</span>
                        <Link to='/login'><span className="link-login">马上登录</span></Link>
                    </div>
                </div>
            </div>
        )
    }
}
export default SignUpForm