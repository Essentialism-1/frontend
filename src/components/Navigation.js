import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {

  return (
    <div className='nav-container'>
      <NavLink to='/dashboard'>Home</NavLink>
      <NavLink to='/'></NavLink>
      {/* Logout button top right of nav */} 
    </div>
  )
}

export default Navigation;