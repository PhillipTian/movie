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
        url="https://ktpublic-pics.s3.amazonaws.com/SampleVideo_720x480_2mb.mp4"
        autosize
        loop
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
