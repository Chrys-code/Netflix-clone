import React from "react";
import "./FaqStyle.scss";

function Faq() {
  return (
    <div className="story-card faq-card">
      <h1 className="story-card-title">Frequently Asked Questions</h1>
      <ul className="faq-list">
        <li className="list-item">
          <button className="faq-question">
            What is Netflix?
            <svg
              id="thin-x"
              viewBox="0 0 26 26"
              className="svg-icon svg-icon-thin-x svg-closed"
              focusable="true"
            >
              <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
            </svg>{" "}
          </button>
        </li>
        <li className="list-item">
          <button className="faq-question">
            How much does Netflix cost?
            <svg
              id="thin-x"
              viewBox="0 0 26 26"
              className="svg-icon svg-icon-thin-x svg-closed"
              focusable="true"
            >
              <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
            </svg>
          </button>
        </li>
        <li className="list-item">
          {" "}
          <button className="faq-question">
            Where can I watch?
            <svg
              id="thin-x"
              viewBox="0 0 26 26"
              className="svg-icon svg-icon-thin-x svg-closed"
              focusable="true"
            >
              <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
            </svg>
          </button>
        </li>
        <li className="list-item">
          {" "}
          <button className="faq-question">
            How do I cancel?
            <svg
              id="thin-x"
              viewBox="0 0 26 26"
              className="svg-icon svg-icon-thin-x svg-closed"
              focusable="true"
            >
              <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
            </svg>
          </button>
        </li>
        <li className="list-item">
          {" "}
          <button className="faq-question">
            What can I watch on Netflix?
            <svg
              id="thin-x"
              viewBox="0 0 26 26"
              className="svg-icon svg-icon-thin-x svg-closed"
              focusable="true"
            >
              <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
            </svg>
          </button>
        </li>
        <li className="list-item">
          {" "}
          <button className="faq-question">
            How does the tree trial work?
            <svg
              id="thin-x"
              viewBox="0 0 26 26"
              className="svg-icon svg-icon-thin-x svg-closed"
              focusable="true"
            >
              <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
            </svg>
          </button>
        </li>
      </ul>
      <form className="email-form" method="GET">
        <h3 className="email-form-title">
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <div className="input-group">
          <input
            name="email"
            htmlFor="email"
            placeholder="Email address"
            required
          ></input>
          <button className="btn btn-red">TRY 30 DAYS FREE</button>
        </div>
      </form>
    </div>
  );
}

export default Faq;
