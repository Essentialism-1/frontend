import React from 'react';
import './App.css';
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import EditUser from './components/EditUser';
=======
import { Route, Switch, Link } from 'react-router-dom';
>>>>>>> 973f83bed7632876050a603e7bcb0abdc129d7a2

import PrivateRoute from './components/PrivateRoute';

import Login from './components/Login';
import Signup from './components/Signup';
import Navigation from './components/Navigation';
import SelectValues from './components/SelectValues';


function App() {
  return (
    <div className="App">
      <Navigation />
<<<<<<< HEAD
      <EditUser />
      <Route exact path='/' component={Login} />
      <Route path='/signup' component={Signup} />
=======
      <h1>Essentialism</h1>
      <Switch>
        <Route exact path='/' component={Login} />

        <Route path='/signup' component={Signup} />
        
        <PrivateRoute exact path='/select-values' component={SelectValues} />
        {/* <PrivateRoute path='/values-dashboard' />
        <PrivateRoute path='/dashboard' /> */}
        {/* <PrivateRoute path='/' /> */}


      </Switch>
>>>>>>> 973f83bed7632876050a603e7bcb0abdc129d7a2

    </div>
  );
}

export default App;
