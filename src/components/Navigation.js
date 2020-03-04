import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'reactstrap';
import './formStyle.css';

const Navigation = () => {

  return (
    <div className='nav-container'>
      <Nav className="navbar bg-light">

        <h1 className='navbar-brand text-dark'>
          Essentialism  {' '}
          <i class="fa fa-calendar-check-o" />
        </h1>

        {/* <div className='links-container'> */}
        <NavLink className='nav-link active text-dark ml-5'
          to='/dashboard'>Home </NavLink>

        <NavLink className='nav-link text-dark'
          to='/'>Login</NavLink>

        <NavLink className='nav-link text-dark'
          to='/signup'>Sign Up!</NavLink>
        {/* Logout button top right of nav */}
        <NavLink to='' className='nav-link text-dark ml-5 logout'>
          <p>Logout</p>
        </NavLink>
        {/* </div> */}
      </Nav>
    </div >
  )
}

export default Navigation;