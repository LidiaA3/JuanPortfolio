import React, { useEffect, useRef } from "react";
import "./cube.scss";

function Cube(props) {
  const modelViewerRef = useRef(null);

  useEffect(() => {
    let initialScrollTop = window.scrollY || window.pageYOffset;
    let initialRotationAngle = 0;
    const modelViewer = modelViewerRef.current;

    if (modelViewer) {
      initialRotationAngle = initialScrollTop * -1;
      modelViewer.cameraOrbit = `${initialRotationAngle}deg 0deg 0deg`;
      modelViewer.style.animationPlayState = "running";
    }

    const handleScroll = () => {
      const scrollTop = window.scrollY || window.pageYOffset;

      if (modelViewer) {
        const rotationAngle =
          (initialRotationAngle + (scrollTop - initialScrollTop)) * -1;
        modelViewer.cameraOrbit = `${rotationAngle}deg 0deg 0deg`;
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
        src="src/components/Cube/cube.glb"
        ar
        ar-modes="webxr scene-viewer quick-look"
        shadow-intensity="0"
        // auto-rotate
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

export default Cube;
