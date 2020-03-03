import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';

import Login from './components/Login';
import Signup from './components/Signup';
import Navigation from './components/Navigation';
import SelectValues from './components/SelectValues';


function App() {
  return (
    <div className="App">

      <Navigation />
      <Route exact path='/' component={Login} />
      <Route path='/signup' component={Signup} />

      <PrivateRoute path='/select-values' component={SelectValues} />
      <PrivateRoute path='/values-dashboard' />
      <PrivateRoute path='/dashboard' />
      {/* <PrivateRoute path='/' /> */}
    </div>
  );
}

export default App;
