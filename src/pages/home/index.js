import React from 'react'
import { NavLink } from 'react-router-dom'
import testImg from '../../../assets/img/test.jpg'
import Nav from '../../component/Nav/index'
import Head from '../../component/Header/index'
import Movie from '../movie'
import Mine from '../mine'
import Search from '../search'
import Video from '../video'
import './index.less'
import { 
    // HashRouter as Router, 
    Route, 
    // BrowserRouter,
    Switch
  } from 'react-router-dom'

export default class Home extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            headArr: [

            ]
        }
    }
    render () {
        return (
            <div className="main-react-app">
                <Head name="react-app"></Head>
                <div className="main">
                    <Switch>
                        <Route path="/home/movie" component={Movie}></Route>
                        <Route path="/home/search" component={Search}></Route>
                        <Route path="/home/video" component={Video}></Route>
                        <Route path="/home/mine" component={Mine}></Route>
                    </Switch>
                </div>
                <Nav></Nav>
            </div>
        )
    }
}