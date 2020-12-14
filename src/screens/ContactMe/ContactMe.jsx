import React from 'react';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './ContactMe.css';

export default class ContactMe extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div className="contact-me">
        <Header />
        <h2 className="page-title">CONTACT</h2>
        <form
          className="contact-form"
          onSubmit={this.submitForm}
          action="https://formspree.io/f/xeqprzog"
          method="POST"
        >
          <label className="form-label" id="form-email">Email:</label>
          <input className="form-input" type="email" name="email" />
          <label className="form-label">Message:</label>
          <textarea
            className="form-input"
            id="text-area"
            type="text"
            name="message" />
          {status === "SUCCESS" ? <p>Thanks for reaching out!</p> : <button className="submit-button">Submit</button>}
          {status === "ERROR" && <p>Ooops! Something went wrong.</p>}
        </form>
        <Footer />
      </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}