import React from 'react';
import { Link } from 'react-router-dom'

function Header(props) {
  return (
    <div className="header">
      <Link className='my-name' to='/'>SUTTON DEMLONG</Link>
      <Link id="header-projects" to="/projects">PROJECTS</Link>
      <a
        href="https://docs.google.com/document/d/1mADQUVUJOYq4hU-eMg7aHnx1sguBNMQTCu4LR0Vi5fE/edit?usp=sharing"
        id="header-resume">
        RESUME
      </a>
      <Link id="header-about" to='/about'>ABOUT</Link>
    </div>
  );
}

export default Header;