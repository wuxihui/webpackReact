import React, { Component } from 'react';
import './style/base.less'
import { 
  HashRouter as Router, 
  Route, 
  BrowserRouter,
  Switch
} from 'react-router-dom'
import Loadable from 'react-loadable'
import routers from './router/index'

export default class App extends Component{
  render () {
    return (
      <BrowserRouter>
          <Switch>
          {
              routers.map((router,index)=>{
                  return (
                      <Route
                          exact={ router.exact }
                          key={index}
                          path={router.path}
                          render={ (props)=>{
                              return (
                                  <div className="main-app">
                                      <router.component { ...props }>
                                          {
                                              router.children?.map((item,itemIndex)=>{
                                                  return (
                                                      <Route
                                                          exact={ item.exact }
                                                          key={itemIndex}
                                                          path={item.path}
                                                          component = { item.component }
                                                      />
                                                  )
                                              })
                                          }
                                      </router.component>
                                  </div>
                              )
                          } }
                      />
                  )
              })
          }
          </Switch>
      </BrowserRouter>
    )
  }
}

// const Home = Loadable({
//   loader: () => import('./pages/home/index'),
//   //加载中的提示组件
//   loading: () => <div>加载中...</div>
// })
// const Search = Loadable({
//   loader: () => import('./pages/search/index.js'),
//   //加载中的提示组件
//   loading: () => <div>加载中...</div>
// })

// //Switch  一级路由一般渲染一个
// // exact 一级路由提高匹配度
// export default class App extends Component {
//   render() {
//     return (
//       <Router>
//         <Switch>
//             <Route path="/" component={ Home } exact />
//             <Route path="/search" component={ Search } />
//         </Switch>
//       </Router>
//     )
//   }
// }
