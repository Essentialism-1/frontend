import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';

import Login from './components/Login';
import Signup from './components/Signup';
import Navigation from './components/Navigation';
import ChooseValues from './components/ChooseValues';


function App() {
  return (
    <div className="App">
      <h1>Essentialism</h1>
      <Route exact path='/' component={Login} />
      <Route path='/signup' component={Signup} />

      <PrivateRoute path='/select-values' component={ChooseValues} />
      <PrivateRoute path='/values-dashbaord' />
      <PrivateRoute path='/dashbaord' />
      {/* <PrivateRoute path='/' /> */}
    </div>
  );
}

export default App;
