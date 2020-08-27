import React from "react";
import "./App.scss";

import Header from "./Components/Header/Header.js";
import Hero from "./Components/Hero/Hero.js";
import WatchOnTv from "./Components/WatchOnTv/WatchOnTv.js";
import WatchOnDevice from "./Components/WatchOnDevice/WatchOnDevice.js";
import DownloadAndWatch from "./Components/DownloadAndWatch/DownloadAndWatch.js";
import Faq from "./Components/faq/Faq.js";
import Footer from "./Components/Footer/Footer.js";

function App() {
  return (
    <div className="basicLayout">
      <Header />
      <div className="story-cards">
        <Hero />
        <WatchOnTv />
        <DownloadAndWatch />
        <WatchOnDevice />
        <Faq />
        <Footer />
      </div>
    </div>
  );
}

export default App;
