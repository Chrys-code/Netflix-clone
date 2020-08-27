import React from "react";
import "./DownloadAndWatchStyle.scss";

function DownloadAndWatch() {
  return (
    <div className="story-card animation-card downloadAndWatch">
      <div className="animation-card-container">
        <div className="story-card-text">
          <h1 className="story-card-title">
            Download your shows to watch offline.
          </h1>
          <h2 className="story-card-subtitle">
            Save your favorites easily and always have something to watch.
          </h2>
        </div>
        <div className="story-card-img-container">
          <div className="story-card-animation-container">
            <img
              alt=""
              className="story-card-img"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            />
            <div className="story-card-animation">
              <div className="story-card-animation-image">
                <img
                  alt=""
                  className="story-card-img"
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                />
              </div>

              <div className="story-card-animation-text">
                <div id="" class="text-0">
                  Stranger Things
                </div>
                <div id="" class="text-1">
                  Downloading...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DownloadAndWatch;
