import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import EditUser from './components/EditUser';
import PrivateRoute from './components/PrivateRoute';

import Login from './components/Login';
import Signup from './components/Signup';
import Navigation from './components/Navigation';
import SelectValues from './components/SelectValues';
import UserList from './components/UserList';


function App() {
  return (
    <div className="App">
      <Navigation />
      {/* <Route exact path='/' component={Login} />
      <Route path='/signup' component={Signup} /> */}
      <h1>Essentialism</h1>

      <Switch>
        <Route exact path='/' component={Login} />

        <Route path='/signup' component={Signup} />

        <PrivateRoute exact path='/select-values' component={SelectValues} />
        {/* <PrivateRoute path='/values-dashboard' />
        <PrivateRoute path='/dashboard' /> */}
        {/* <PrivateRoute path='/' /> */}

      </Switch>
    </div>
  );
}

export default App;
