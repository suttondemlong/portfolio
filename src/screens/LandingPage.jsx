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
      <a
        href="https://docs.google.com/document/d/1mADQUVUJOYq4hU-eMg7aHnx1sguBNMQTCu4LR0Vi5fE/edit?usp=sharing"
        id="resume">
        RESUME
      </a>
      <Link id="about" to='/about'>ABOUT</Link>
      <Footer />
    </div>
  );
}

export default LandingPage;