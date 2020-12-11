import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import useModal from '../services/useModal';
import Modal from '../components/Modal'

import '../App.css';

function Projects(props) {
  const {isShowing, toggle} = useModal();

  return (
    <div className="projects-page">
      <Header />
      <h2 className="page-title">PROJECTS</h2>
      <div className="projects-container">
        <div className="project-tile" id="project-1">
          <button className="view-button" onClick={toggle}>
            View Details
          </button>
          </div>
        <div className="project-tile" id="project-2">
          <button className="view-button" onClick={toggle}>
            View Details
          </button>
          </div>
        <div className="project-tile" id="project-3">
          <button className="view-button" onClick={toggle}>
            View Details
          </button>
        </div>
        <Modal
          isShowing={isShowing}
          hide={toggle}
        />
      </div>
      <Footer/>
    </div>
  );
}

export default Projects;