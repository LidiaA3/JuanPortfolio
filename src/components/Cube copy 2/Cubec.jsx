import React, { useEffect, useRef } from "react";
import "./cubec.scss";

function Cubec(props) {
  const modelViewerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || window.pageYOffset;
      const modelViewer = modelViewerRef.current;

      if (modelViewer) {
        const rotationAngle = scrollTop * -1;
        modelViewer.cameraOrbit = `${rotationAngle}deg 0deg 0deg`;
        modelViewer.style.animationPlayState = "running";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="model-container" className="cube__container">
      <model-viewer
        ref={modelViewerRef}
        id="model-viewer"
        src="src/components/Cube copy 2/cube-def-5.95.glb"
        ar
        ar-modes="webxr scene-viewer quick-look"
        shadow-intensity="0"
        auto-rotate
        camera-orbit-controls-auto-rotate-delay="50"
      >
        <div className="progress-bar hide" slot="progress-bar">
          <div className="update-bar"></div>
        </div>
        <button slot="ar-button" id="ar-button"></button>
      </model-viewer>
    </div>
  );
}

export default Cubec;
