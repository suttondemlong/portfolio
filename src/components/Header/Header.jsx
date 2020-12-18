import React from 'react';
import { Link } from 'react-router-dom'
import { resumeLink } from '../Links'
import './Header.css';

function Header(props) {
  return (
    <div className="header">
      <div className="header-title">
        <Link className='my-name' to='/'>SUTTON DEMLONG</Link>
      </div>
      <div className="header-options">
        <Link
          className="header-option"
          id="header-projects"
          to="/projects">PROJECTS</Link>
        <a
          target='_blank'
          className="header-option"
          href={resumeLink}
          id="header-resume">
          RESUME
        </a>
        <Link
          className="header-option"
          id="header-about"
          to='/about'>ABOUT</Link>
      </div>
    </div>
  );
}

export default Header;