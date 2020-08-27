import React from "react";
import "./WatchOnTvStyle.scss";

function WatchOnTv() {
  return (
    <div className="story-card animation-card watchOnTv">
      <div className="animation-card-container">
        <div className="story-card-text">
          <h1 className="story-card-title"> Enjoy on your TV. </h1>
          <h2 className="story-card-subtitle">
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </h2>
        </div>
        <div className="story-card-img-container">
          <div className="story-card-animation-container">
            <img
              alt=""
              className="story-card-img"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            />
            <div className="story-card-animation">
              <video
                className="story-card-video"
                playsInline={true}
                autoPlay={true}
                muted={true}
                loop={true}
              >
                <source
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WatchOnTv;
