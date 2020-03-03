import React from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';

import Login from './components/Login';
import Signup from './components/Signup';
import Navigation from './components/Navigation';
import SelectValues from './components/SelectValues';


function App() {
  return (
    <div className="App">
      <h1>Essentialism</h1>
      <Switch>
        <Route path='/signup' component={Signup} />
        
        <PrivateRoute exact path='/select-values' component={SelectValues} />
        {/* <PrivateRoute path='/values-dashboard' />
        <PrivateRoute path='/dashboard' /> */}
        {/* <PrivateRoute path='/' /> */}
        <Route  path='/' component={Login} />

      </Switch>
    </div>
  );
}

export default App;
