import "./cube-empty.scss";

function Cubeempty() {
  return (
    <div className="supercontainer">
      <div id="model-container" className="cube-empty__container">
        <model-viewer
          id="model-viewer"
          src="src/components/CubeEmpty/cube-wireframe.glb"
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
    </div>
  );
}

export default Cubeempty;
