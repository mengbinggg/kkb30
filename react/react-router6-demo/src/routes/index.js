/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-09-13 11:07:21
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-09-13 11:45:47
 * @Descripttion: 
 */
import { Navigate } from 'react-router-dom'
import Home from '../pages/Home';
import About from '../pages/About';
import News from '../pages/News';
import Message from '../pages/Message';
import Detail from '../pages/Detail';

export default [
    {
        path: '/home',
        element: <Home />,
        children: [
            {
                path: 'news',
                element: <News />
            },
            {
                path: 'message',
                element: <Message />,
                children: [
                    {
                        // path: 'detail/:id/:title/:content',  // params传参
                        path: 'detail',  // search传参、state传参
                        element: <Detail />
                    }
                ]
            }
        ]
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/',
        element: <Navigate to="/home" />
    },
]