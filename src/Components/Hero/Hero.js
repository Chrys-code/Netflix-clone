import React from "react";
import "./HeroStyle.scss";

function Hero() {
  return (
    <div className="story-card hero-card">
      <div className="hero-card-background">
        <div className="img-wrapper">
          <img
            className="bg"
            src={require("../../Assets/Images/hero-bg.jpg")}
            alt="hero-card-background"
          />
          <div className="img-gradient"></div>
        </div>
      </div>
      <div className="story-card-text">
        <h1 className="story-card-title">
          Unlimited movies, TV shows, and more.
        </h1>
        <h2 className="story-card-subtitle">Watch anywhere, Cancel anytime.</h2>
        <form className="email-form" method="GET">
          <h3 className="email-form-title">
            Ready to watch? Enter your email to create or restart your
            membership.
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
    </div>
  );
}

export default Hero;
