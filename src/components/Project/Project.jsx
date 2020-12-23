import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import useModal from "../../services/useModal";
import "./Project.css";

export default function Project({ project }) {
  const { isShowing, toggle } = useModal();
  const github = `https://github.com/suttondemlong/${project.github}`;

  return (
    <div className="project-tile" id={project.id}>
      <button
        className="show-modal-button"
        onClick={toggle}>More Info</button>
      {isShowing
      ? ReactDOM.createPortal(
          <React.Fragment>
            <div className="modal-overlay" />
            <div
              className="modal-wrapper"
              aria-modal
              aria-hidden
              tabIndex={-1}
              role="dialog"
            >
              <div className="modal">
              <div className="modal-header">
                <a
                  target='_blank'
                  rel="noreferrer"
                  href={github}>
                  <img
                    className="modal-icon"
                    src='https://raw.githubusercontent.com/suttondemlong/portfolio/37db0898f2884dce40db2875d3c2d2b726dc190c/src/assets/github.svg' alt='GitHub'></img>
                </a>
                <a
                  target='_blank'
                  rel="noreferrer"
                  href={project.link}
                  className="project-site-link"
                >View Site</a>
                <button
                  type="button"
                  className="modal-close-button"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={toggle}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <h2 id="modal-project-title">{project.title}</h2>
              <img
                className="modal-img"
                src={project.img}
                alt="img" />
              <p className="modal-text">{project.info}</p>
              <p className="modal-text">Toolkit: {project.toolkit}</p>
              </div>
            </div>
          </React.Fragment>,
          document.body
        )
      : null}
    </div>
  )
}