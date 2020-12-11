import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import useModal from '../services/useModal';
import P1Modal from '../components/P1Modal'
import P2Modal from '../components/P2Modal'
import P3Modal from '../components/P3Modal'
import '../App.css';

function Projects(props) {
  const { isShowing, toggle } = useModal()

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
        <P1Modal
          isShowing={isShowing}
          hide={toggle}
        />
        <P2Modal
          isShowing={isShowing}
          hide={toggle}
        />
        <P2Modal
          isShowing={isShowing}
          hide={toggle}
        />
      </div>
      <Footer/>
    </div>
  );
}

export default Projects;