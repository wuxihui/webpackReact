import React from 'react'
import Head from '../../component/Header'
import './index.less'
import { Input, Space, Button } from 'antd'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'

export default class Login extends React.Component{
    constructor (props) {
        super(props)
        this.state = {
            title: '登 录',
            navList: [
                { id: 1, name: '账号登录' },
                { id: 2, name: '手机号登录' }
            ],
            navIndex: 1,
            usename: '', // 账号
            password: '', // 密码
        }
    }

    handleNavClick (item , e) {
        console.log(item, e)
        this.setState({ navIndex: item.id })
    }

    // 登录
    handleLoginClick () {
        console.log(this.state.usename);
    }

    // 获取账号
    changeUsename = (e) => {
        console.log(e.target.value)
        this.setState({
            usename: e.target.value
        })
    }

    // 获取密码
    changePassword = (e) => {
        console.log(e.target.value)
        this.setState({ password: e.target.value })
    }

    // 立即注册
    handleRegisterNow () {
        console.log('立即注册');
    }

    // 找回密码
    handleRetrievePassword () {
        console.log('找回密码');
    }

    render () {
        let isAccount;
        if (Number(this.state.navIndex) === 1) {
            isAccount = <div className="account-login">
                <Input placeholder="请输入账号" type="text" value={this.state.usename} onChange={this.changeUsename} className="login-txt" />
                <Space direction="vertical" className="login-pwd">
                    <Input.Password
                    placeholder="请输入密码"
                    value={this.state.password}
                    onChange={this.changePassword}
                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    />
                </Space>
                <Button type="primary" className="login-primary" onClick={() => this.handleLoginClick()}>登 录</Button>
                <div className="login-footer">
                    <p onClick={() => this.handleRegisterNow()}>立即注册</p>
                    <p onClick={() => this.handleRetrievePassword()}>找回密码</p>
                </div>
            </div>
        } else {
            isAccount = <div>555</div>
        }

        return (
            <div className="login">
                <Head name={this.state.title}></Head>
                <div className="nav">
                    <ul>
                        { this.state.navList.map(item => {
                            return (
                                <li key={item.id} className={this.state.navIndex === item.id ? 'loginHeightLight' : ''} onClick={(e) => this.handleNavClick(item, e)}>{item.name}</li>
                            )
                        }) }
                    </ul>
                </div>    
               {isAccount}
            </div>
        )
    }
}