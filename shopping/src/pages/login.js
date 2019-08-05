import React from 'react'
import '../assets/css/login.css'

class login extends React.Component{
    render(){
        console.log('login')
        return (
            <div className='Login'>
                <div className="login-back">
                    <i className="login-back-icon" onClick={()=>{this.props.history.go(-1)}}></i>
                </div>
                <div className="login-ba">
                    <i className="login-ba-title"></i>
                </div>
                <form className="login-btn">
                    <input type="text" placeholder="手机号/邮箱/用户名" className="login-btn-txt" />
                    <input type="text" placeholder="密码" className="login-btn-btn" />
                    <button className="login-btn-login">登录</button>
                    <div className="login-btn-link">
                        <a href="\">登录</a>
                        <a href="\">忘记密码？</a>
                    </div>
                    <div className="login-icon">
                        <i className="login-icon-qq"></i>
                        <i className="login-icon-wb"></i>
                        <i className="login-icon-wx"></i>
                    </div>
                </form>
            </div>
        )
    }
}

export default login