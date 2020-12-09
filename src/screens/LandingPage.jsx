import React from 'react';
import { Link } from 'react-router-dom'

function LandingPage(props) {
  return (
    <div>
      <div id="name-blurb">
        <h1>SUTTON DEMLONG</h1>
        <p>Junior developer with a background in Fine Arts and woodworking
          striving for elegance and excellence in software engineering.</p>
      </div>
      <Link id="projects" to="/projects">PROJECTS</Link>
      <Link id="resume" to='/resume'>RESUME</Link>
      <Link id="about" to='/about'>ABOUT</Link>
    </div>
  );
}

export default LandingPage;