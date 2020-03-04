import React from 'react';
import './App.css';
<<<<<<< HEAD
=======
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import EditUser from './components/EditUser';
>>>>>>> 0673027bad5b233168d792e70f3fcec9d47af6b0
import { Route, Switch, Link } from 'react-router-dom';

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
<<<<<<< HEAD
=======
      <EditUser />
      <Route exact path='/' component={Login} />
      <Route path='/signup' component={Signup} />
>>>>>>> 0673027bad5b233168d792e70f3fcec9d47af6b0
      <h1>Essentialism</h1>

      <Switch>
        <Route exact path='/' component={Login} />

        <Route path='/signup' component={Signup} />

        <PrivateRoute exact path='/select-values' component={SelectValues} />
        {/* <PrivateRoute path='/values-dashboard' />
        <PrivateRoute path='/dashboard' /> */}
        {/* <PrivateRoute path='/' /> */}

      </Switch>
<<<<<<< HEAD

=======
>>>>>>> 0673027bad5b233168d792e70f3fcec9d47af6b0
    </div>
  );
}

export default App;
