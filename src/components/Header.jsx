import React from 'react';
import { Link } from 'react-router-dom'

function Header(props) {
  return (
    <div>
      <Link to='/'>SUTTON DEMLONG</Link>
      <Link to="/projects">PROJECTS</Link>
      <Link to='/resume'>RESUME</Link>
      <Link to='/about'>ABOUT</Link>
    </div>
  );
}

export default Header;