import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = props => {
  return (
    <div id="navbar">
      <NavLink to="/board">Board</NavLink>
      <NavLink to="/add">Add Squares</NavLink>
    </div>
  )
}

export default Navbar;