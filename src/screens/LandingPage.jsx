import React from 'react';
import { Link } from 'react-router-dom'

import Footer from '../components/Footer'

function LandingPage(props) {
  return (
    <div className='landing-page'>
      <div className="background-gradient"></div>
      <div className="triangle"></div>
      <div id="name-blurb">
        <h1 className='my-name' id='landing-my-name'>SUTTON DEMLONG</h1>
        <p className="blurb">Junior developer with a background in Fine Arts and woodworking
          striving for elegance and excellence in software engineering.</p>
      </div>
      <Link id="projects" to="/projects">PROJECTS</Link>
      <Link id="resume" to='/resume'>RESUME</Link>
      <Link id="about" to='/about'>ABOUT</Link>
      <Footer />
    </div>
  );
}

export default LandingPage;