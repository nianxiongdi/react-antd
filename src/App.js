import React, { Component } from 'react';
// import { Button } from 'antd';
import './App.css';
import { BrowserRouter,Route,Switch } from 'react-router-dom'

import Login from './components/pages/login'
import Register from './components/pages/register'
// import home from './components/container/home'


class App extends Component {
  render() {
      return(
          <BrowserRouter>
              <Switch>
                  <Route exact path="/" component={Login}/>
                  <Route path="/login" component={Login}/>
                  <Route path="/register" component={Register}/>
                  {/*<Route path="/home" component={home}/>*/}
              </Switch>
          </BrowserRouter>
      );
  }
}

export default App;