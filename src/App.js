import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Navigation from './components/Navigation';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <h1>ESSENTIALISM</h1>
      <div>
        <Signup />
      </div>
    </div>
  );
}

export default App;
