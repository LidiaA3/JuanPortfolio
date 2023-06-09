import "./cone-empty.scss";

function Coneempty() {
  return (
    <div className="cone-empty__position-container">
      <div id="model-container" className="cone-empty__container">
        <model-viewer
          id="model-viewer"
          src="src/components/ConeEmpty/cone-wireframe.glb"
          ar
          ar-modes="webxr scene-viewer quick-look"
          shadow-intensity="0"
          //   camera-controls
          // auto-rotate
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

export default Coneempty;
