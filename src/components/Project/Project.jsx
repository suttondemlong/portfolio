import React from "react";
import ReactDOM from "react-dom";
import useModal from "../../services/useModal";
import "./Project.css";

export default function Project({ project }) {
  const { isShowing, toggle } = useModal();
  const github = `https://github.com/sutton-demlong/${project.github}`;

  return (
    <div className='project-modal'>
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
                <p className="modal-text">{project.info}</p>
                
                </div>
              </div>
            </React.Fragment>,
            document.body
          )
        : null}
      </div>
    </div>
  )
}