/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-09-13 10:26:15
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-09-13 11:13:19
 * @Descripttion: 
 */
import { NavLink, Routes, Route, Navigate, useRoutes } from 'react-router-dom'
import routes from './routes';
import Header from './components/Header';
// import Home from './pages/Home';
// import About from './pages/About';

function App() {

  const element = useRoutes(routes)

  function showClass({ isActive }) {
    return isActive ? "list-group-item active" : "list-group-item"
  }

  return (
    <div style={{ margin: '20px' }}>
      <Header></Header>
      <div style={{ marginTop: '20px' }}>
        <ul className="list-group" style={{ float: 'left' }}>
          {/* <NavLink className="list-group-item" to='/home'>首页</NavLink> */}

          {/* 自定义active的class */}
          <NavLink className={showClass} to='/home'>首页</NavLink>
          <NavLink className="list-group-item" to='/about'>关于</NavLink>
        </ul>
        <div style={{ marginLeft: '90px' }}>
          {/* <Routes>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/' element={<Navigate to='/home'></Navigate>}></Route>
          </Routes> */}

          {element}

        </div>
      </div>
    </div>
  );
}

export default App;
