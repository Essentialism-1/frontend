import React from 'react';
import { connect,  } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { Nav } from 'reactstrap';
import './formStyle.css';
import { logout } from '../actions';

const Navigation = props => {
  let history = useHistory();

  const handleLogout = (e) => {
    console.log('logout', history);
    props.logout(e, history);
    history.push('/');
    // props.history.push('/')
  }

  return (
    <div className='nav-container'>
      <Nav className="navbar bg-light">

        <h1 className='navbar-brand text-dark'>
          Essentialism  {' '}
          <i className="fa fa-calendar-check-o" />
        </h1>


        <NavLink className='nav-link active text-dark ml-5'
          to='/dashboard'>Home </NavLink>

        <NavLink className='nav-link text-dark'
          to='/'>Login</NavLink>

        <NavLink className='nav-link text-dark'
          to='/signup'>Sign Up!</NavLink>
        {/* Logout button top right of nav */}
        <NavLink 
          to='' 
          className='nav-link text-dark ml-5'
          onClick={(e) => handleLogout(e)}
        >
          Logout
        </NavLink>
      </Nav>
    </div >
  )
}

export default connect(null, { logout }) (Navigation);