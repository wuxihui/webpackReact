import React from 'react'
import { NavLink } from 'react-router-dom'
import testImg from '../../../assets/img/test.jpg'
import Nav from '../../component/Nav/index'
import './index.less'

export default class Home extends React.Component {
    render () {
        return (
            <div className="test test2">
                <Nav></Nav>
                <input type="text" placeholder="进入一级路由搜索页面" />
                <p className="testP">hello world</p>
                <NavLink to="/user">二级路由</NavLink>
                <img src={testImg} alt="" style={{width:360,height:60}}/>
            </div>
        )
    }
}