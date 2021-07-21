import React from 'react'
import { Link } from 'react-router-dom'
import './index.less'
import movie from '../../../assets/img/movie.png'
import search from '../../../assets/img/search.png'
import video from '../../../assets/img/video.png'
import mine from '../../../assets/img/mine.png'
export default class Nav extends React.Component {
    constructor (props) {
        super(props);
        // 初始化数据
        this.state = {
            footerArr: [
                { id: 1, src: movie, name: '电影/影院', url: '/home/movie' },
                { id: 2, src: search, name: '搜索', url: '/home/search' },
                { id: 3, src: video, name: '视频', url: '/home/video' },
                { id: 4, src: mine, name: '我的', url: '/home/mine' }
            ],
            footerIndex: 1,
        }
        
    }
    // 事件方法
    footerClickActive (item, e) {
        console.log(item)
        console.log(e)
        this.setState({ footerIndex: item.id })
    }
    
    render () {
        const listData = this.state.footerArr.map((item, index) => {
            return (
                <li key={item.id} onClick={(e) => this.footerClickActive(item, e)} >
                    <Link to={item.url} className={ this.state.footerIndex === item.id ? 'heightLight' : '' }>
                        <p className="foot-p1"><img className="foot-img" src={item.src} /></p>
                        <p className="foot-p2">{item.name}</p>
                    </Link>
                </li>
            )
        })
        return (
            <ul>
                {listData}
            </ul>
        )
    }
}