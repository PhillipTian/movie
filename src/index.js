import React from "react";
import ReactDOM from "react-dom";
import VideoPlayer from "react-simple-video-player";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Welcome,dear passenger</h1>
      <h2>Watch right now!</h2>
      <VideoPlayer
        url='movies/_Sleepwalk_ - Short Film - Trailer (2018).mp4'
        autosize
        loop
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
