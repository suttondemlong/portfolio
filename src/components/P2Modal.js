import React from 'react';
import ReactDOM from 'react-dom';

const P2Modal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
          <button type="button" className="modal-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
          <a
            href=""
            className="modal-button">Visit Site</a>
        </div>
        <p>
          Hello, I'm a modal.
        </p>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default P2Modal;

// code based on tuturial from https://upmostly.com/tutorials/modal-components-react-custom-hooks