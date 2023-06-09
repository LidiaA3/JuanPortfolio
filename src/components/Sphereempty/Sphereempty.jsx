import "./sphere-empty.scss";

function Sphereempty() {
  return (
    <div className="sphere-empty__position-container">
      <div id="model-container" className="sphere-empty__container">
        <model-viewer
          id="model-viewer"
          src="src/components/Sphereempty/sphere-wireframe.glb"
          ar
          ar-modes="webxr scene-viewer quick-look"
          shadow-intensity="0"
          // auto-rotate
          // camera-controls
          camera-orbit-controls-auto-rotate-delay="50"
        >
          <div className="progress-bar hide" slot="progress-bar">
            <div className="update-bar"></div>
          </div>
          <button slot="ar-button" id="ar-button"></button>
        </model-viewer>
      </div>
    </div>
  );
}

export default Sphereempty;
