import React from 'react';
import { Link } from 'react-router-dom'
import '../App.css';

function Footer(props) {
  return (
    <div className='footer-container'>
      <Link to='/contact'>CONTACT</Link>
      <a href='https://github.com/suttondemlong'>
        <img
          className="icon"
          src='https://raw.githubusercontent.com/suttondemlong/portfolio/37db0898f2884dce40db2875d3c2d2b726dc190c/src/assets/github.svg' alt='GitHub'></img>
      </a>
      <a href='https://www.linkedin.com/in/sutton-demlong/'>
        <img
          className="icon"
          id="linked-in-id"
          src='https://raw.githubusercontent.com/suttondemlong/portfolio/37db0898f2884dce40db2875d3c2d2b726dc190c/src/assets/linkedin.svg' alt='LinkedIn'></img>
      </a>
    </div>
  );
}

export default Footer;