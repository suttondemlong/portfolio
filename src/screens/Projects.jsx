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
        <div className="project-tile" id="project-1">View Details</div>
        <div className="project-tile" id="project-2">View Details</div>
        <div className="project-tile" id="project-3">View Details</div>
      </div>
      <Footer/>
    </div>
  );
}

export default Projects;