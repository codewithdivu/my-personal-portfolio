import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <section className="contact">
        <div className="contact-div">
          <div className="contact-img-div">
            <img className="contact-img" src="./images/contact.png" alt='contact' />
          </div>
        </div>
        <div className="form-div">
          <div className="form">
            <form id="myform">
              <div class="user-box">
                <input type="text" id="name" />
                <label className="floating-label">Your Name*</label>
              </div>
              <div class="user-box">
                <input type="text" id="email" />
                <label>Email Address*</label>
              </div>
              <div class="user-box">
                <textarea id="message"></textarea>
                <label>Enter your message*</label>
              </div>
              <Link id="submit">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Submit
              </Link>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
