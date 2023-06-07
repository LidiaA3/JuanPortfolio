import React, { useEffect, useRef } from "react";
import "./sphere.scss";

function Sphere(props) {
  const modelViewerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || window.pageYOffset;
      const modelViewer = modelViewerRef.current;

      if (modelViewer) {
        const rotationAngle = scrollTop * -0.8;
        modelViewer.cameraOrbit = `${rotationAngle}deg 65deg 40deg`;
        modelViewer.style.animationPlayState = "running";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="model-container" className="sphere__container">
      <model-viewer
        className="sphere__object"
        ref={modelViewerRef}
        id="model-viewer"
        src="src/components/Sphere/sphere.glb"
        ar
        ar-modes="webxr scene-viewer quick-look"
        shadow-intensity="0"
        auto-rotate
        camera-orbit-controls-auto-rotate-delay="0"
      >
        <div className="progress-bar hide" slot="progress-bar">
          <div className="update-bar"></div>
        </div>
        <button slot="ar-button" id="ar-button"></button>
      </model-viewer>
    </div>
  );
}

export default Sphere;
