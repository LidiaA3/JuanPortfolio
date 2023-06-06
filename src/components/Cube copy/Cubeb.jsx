import React from "react";
import "./cubeb.scss";

function Cubeb(props) {
  return (
    <>
      <div className="cube__container">
        <model-viewer
          src="src/components/Cube copy/cube-def.glb"
          ar
          ar-modes="webxr scene-viewer quick-look"
          camera-controls
          poster="poster.webp"
          shadow-intensity="0"
          shadow-softness="0"
        >
          <div class="progress-bar hide" slot="progress-bar">
            <div class="update-bar"></div>
          </div>
          <button slot="ar-button" id="ar-button"></button>
          <div id="ar-prompt"></div>
        </model-viewer>
      </div>
    </>
  );
}

export default Cubeb;
