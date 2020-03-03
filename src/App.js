import React from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';

import Login from './components/Login';
import Signup from './components/Signup';
import Navigation from './components/Navigation';
import SelectValues from './components/SelectValues';
import EditUser from './components/EditUser';



function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/signup' component={Signup} />
        
        <PrivateRoute exact path='/select-values' component={SelectValues} />
        <PrivateRoute path='/values-dashboard' />
        <PrivateRoute path='/dashboard' />
        <PrivateRoute path='/' />
      </Switch>
      
      {/* temp edit user links */}
      <Link to='/edit-user' >Edit User Link</Link>
      <Route exact path='/edit-user' component={EditUser} />

    </div>
  );
}

export default App;
