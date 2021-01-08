import React from 'react'
import './test.css'
import './test.less'
import testImg from '../../assets/img/test.jpg'
import Blog from '../blog'
import User from '../user'
import Resume from '../resume'

export default class Home extends React.Component {
    render () {
        return (
            <div className="test test2">
                <p>hello world</p>
                <img src={testImg} alt="" style={{width:360,height:60}}/>
                <Blog />
                <User />
                <Resume />
            </div>
        )
    }
}