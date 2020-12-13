import React from 'react';
import { Link } from 'react-router-dom'

function Header(props) {
  return (
    <div className="header">
      <Link className='my-name' to='/'>SUTTON DEMLONG</Link>
      <Link id="header-projects" to="/projects">PROJECTS</Link>
      <a
        href="https://drive.google.com/file/d/11k8zkNXSxIgPFocPLFyBK-Tb244lO2pf/view?usp=sharing"
        id="header-resume">
        RESUME
      </a>
      <Link id="header-about" to='/about'>ABOUT</Link>
    </div>
  );
}

export default Header;