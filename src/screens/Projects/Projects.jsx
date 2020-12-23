import React from 'react';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import {projectList} from "../../services/projectList";
import Project from "../../components/Project/Project";
import '../../App.css';
import './Projects.css';

function Projects(props) {
  return (
    <div className="projects-page">
      <Header />
      <h2 className="page-title">PROJECTS</h2>
      <div className="projects-container">
      {projectList.map((project, idx) => (
        <Project project={project} key={idx} />
        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default Projects;