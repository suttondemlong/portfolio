import React from 'react';
import { Link } from 'react-router-dom'

function Header(props) {
  return (
    <div className="header">
      <Link className='my-name' to='/'>SUTTON DEMLONG</Link>
      <Link id="header-projects" to="/projects">PROJECTS</Link>
      <Link id="header-resume" to='/resume'>RESUME</Link>
      <Link id="header-about" to='/about'>ABOUT</Link>
    </div>
  );
}

export default Header;