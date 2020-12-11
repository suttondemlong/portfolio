import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../App.css';

function Projects(props) {
  return (
    <div className="projects-page">
      <Header />
      <h2 className="page-title">PROJECTS</h2>
      <div className="projects-container">
        <div className="project-tile" id="project-1">
          <div className="tile-hover">
            <a className="project-link" href="https://suttondemlong.github.io/Parks-ALERT-/">View Project</a>
            <a href='https://github.com/suttondemlong/Parks-ALERT-'>
              <img
                className="project-icon"
                src='https://raw.githubusercontent.com/suttondemlong/portfolio/37db0898f2884dce40db2875d3c2d2b726dc190c/src/assets/github.svg' alt='GitHub' />
            </a>
          </div>
        </div>
        <div className="project-tile" id="project-2">
          <div className="tile-hover">
            <a className="project-link" href="https://objective-williams-628b36.netlify.app/">View Project</a>
            <a href='https://github.com/suttondemlong/paint-by-grid'>
              <img
                className="project-icon"
                src='https://raw.githubusercontent.com/suttondemlong/portfolio/37db0898f2884dce40db2875d3c2d2b726dc190c/src/assets/github.svg' alt='GitHub' />
            </a>
          </div>
        </div>
        <div className="project-tile" id="project-3">
          <div className="tile-hover">
            <a className="project-link" href="https://thought-vomit.netlify.app/">View Project</a>
            <a href='https://github.com/suttondemlong/Thought-Vomit'>
              <img
                className="project-icon"
                src='https://raw.githubusercontent.com/suttondemlong/portfolio/37db0898f2884dce40db2875d3c2d2b726dc190c/src/assets/github.svg' alt='GitHub' />
            </a>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Projects;