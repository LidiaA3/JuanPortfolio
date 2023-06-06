import React from "react";
import "./cube.scss";

function Cube(props) {
  return (
    <>
      <div className="cube__container">
        <model-viewer
          src="src/components/Cube/cubo-asd.glb"
          ar
          ar-modes="webxr scene-viewer quick-look"
          camera-controls
          poster="poster.webp"
          shadow-intensity="0"
          exposure="2"
          shadow-softness="1"
        >
          <div className="progress-bar hide" slot="progress-bar">
            <div className="update-bar"></div>
          </div>
          <button slot="ar-button" id="ar-button"></button>
        </model-viewer>
      </div>
    </>
  );
}

export default Cube;
