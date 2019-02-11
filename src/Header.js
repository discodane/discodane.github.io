import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <ul className="main-nav">
      <li><NavLink exact to="/">Home</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/teachers">Something else</NavLink></li>
      <li><NavLink to="/courses">Something else else</NavLink></li>
    </ul>    
  </header>
)

export default Header;