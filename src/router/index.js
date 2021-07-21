import Home from '../pages/home'
import Blog from '../pages/blog'
import Movie from '../pages/movie'
import Resume from '../pages/resume'
import User from '../pages/user'
import Search from '../pages/search'
import Login from '../pages/login'
import Mine from '../pages/mine'
import Video from '../pages/video'

const routers = [
    {
        path: '/',
        exact: true,
        component: Login
    },
    {
        path:'/home',
        component: Home,
        children:[
            {
                path:'/',
                exact: true,
                component: Movie
            },
            {
                path: '/home/search',
                component: Search
            },
            {
                path: '/home/mine',
                component: Mine
            },
            {
                path: '/home/video',
                component: Video
            }
        ]
    },
    {
        path:'/user',
        component: User
    },
    {
        path:'/resume',
        component: Resume
    },
    {
        path:'/blog',
        component: Blog
    }
]


export default routers;
