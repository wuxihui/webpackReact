import { render } from 'less'
import React from 'react'
import { Link } from 'react-router-dom'

export default class Nav extends React.Component {
    render () {
        return (
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/search">搜索页</Link></li>
            </ul>
        )
    }
}