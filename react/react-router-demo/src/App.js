import { NavLink, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About';

function App() {
  return (
    <div style={{ margin: '20px' }}>
      <h1>react-router演示</h1>
      <div>
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
