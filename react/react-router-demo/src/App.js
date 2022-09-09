/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-09-08 16:47:19
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-09-09 15:58:00
 * @Descripttion: 
 */
import { NavLink, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About';
import Header from './components/Header'

function App() {
  return (
    <div style={{ margin: '20px' }}>
      <Header></Header>
      <div style={{ marginTop: '20px' }}>
        <ul className="list-group" style={{ float: 'left' }}>
          <NavLink className="list-group-item" to='/home'>首页</NavLink>
          <NavLink className="list-group-item" to='/about'>关于</NavLink>
        </ul>
        <div style={{ marginLeft: '90px' }}>
          <Switch>
            <Route path='/home' component={Home}></Route>
            <Route path='/about' component={About}></Route>
            <Redirect to="/home"></Redirect>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
