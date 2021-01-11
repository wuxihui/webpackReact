import React, { Component } from 'react';
import { 
  HashRouter as Router, 
  Route, 
  Switch
} from 'react-router-dom'
import Loadable from 'react-loadable'

const Home = Loadable({
  loader: () => import('./pages/home/index'),
  //加载中的提示组件
  loading: () => <div>加载中...</div>
})
const Search = Loadable({
  loader: () => import('./pages/search/index.js'),
  //加载中的提示组件
  loading: () => <div>加载中...</div>
})

//Switch  一级路由一般渲染一个
// exact 一级路由提高匹配度
export default class App extends Component {
  render() {
    return (
      <Router>
        {/* <Switch> */}
            <Route path="/" component={ Home } exact />
            <Route path="/search" component={ Search } />
        {/* </Switch> */}
      </Router>
    )
  }
}
