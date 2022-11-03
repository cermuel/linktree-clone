import React from "react";
import "../App.css";
const Contact = () => {
  const name = "CERMUEL";
  return (
    <div className="contact">
      <div className="heading">Contact Me</div>
      <div className="supporting-text">
        Hi there, contact me to ask me about anything you have in mind.
      </div>
      <form>
        <div className="firstname">
          <label htmlFor="first_name">First name</label>
          <input
            type="text"
            id="first_name"
            placeholder="Enter your first name"
          />{" "}
        </div>
        <div className="lastname">
          <label htmlFor="last_name">Last name</label>
          <input
            type="text"
            id="last_name"
            placeholder="Enter your last name"
            required
          />
        </div>
        <div className="other-inputs">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="yourname@email.com"
            required
          />
        </div>
        <div className="other-inputs">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            placeholder="Send me a message and I'll reply you as soon as possible..."
            required
          />
        </div>
        <div className="checkbox-container">
          <input type="checkbox" required />
          <div>
            You agree to providing your data to {name} who may contact you.
          </div>
        </div>
        <button type="submit" id="btn_submit">
          Send message
        </button>
      </form>
    </div>
  );
};

export default Contact;
