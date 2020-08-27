import React from "react";
import "./WatchOnDeviceStyle.scss";

function WatchOnDevice() {
  return (
    <div className="story-card animation-card watchOnDevice">
      <div className="animation-card-container">
        <div className="story-card-text">
          <h1 className="story-card-title">Watch everywhere.</h1>
          <h2 className="story-card-subtitle">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV without paying more.
          </h2>
        </div>
        <div className="story-card-img-container">
          <div className="story-card-animation-container">
            <img
              alt=""
              className="story-card-img"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
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
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
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

export default WatchOnDevice;
