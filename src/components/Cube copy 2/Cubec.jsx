import React, { useEffect } from "react";
import "./cubec.scss";

function Cubec(props) {
  useEffect(() => {
    // Función para controlar la rotación del modelo basada en el desplazamiento
    function handleScroll() {
      // Obtener la posición de desplazamiento vertical
      const scrollTop = window.scrollY || window.pageYOffset;

      // Calcular el ángulo de rotación basado en la posición de desplazamiento
      const rotationAngle = scrollTop * 0.5; // Ajusta el factor según la velocidad de rotación deseada

      // Obtener el elemento del modelo
      const modelViewer = document.getElementById("model-viewer");

      // Aplicar la rotación al modelo
      modelViewer.cameraOrbit = `${rotationAngle}deg 0deg 0deg`;

      // Activar la animación
      modelViewer.style.animationPlayState = "running";
    }

    // Función para detener la animación
    function stopAnimation() {
      const modelViewer = document.getElementById("model-viewer");
      modelViewer.style.animationPlayState = "paused";
    }

    // Asignar el controlador de eventos al desplazamiento de la página
    window.addEventListener("scroll", handleScroll);

    // Detener la animación cuando el componente se desmonte
    return () => {
      window.removeEventListener("scroll", handleScroll);
      stopAnimation();
    };
  }, []);

  return (
    <div id="model-container" className="cube__container">
      <model-viewer
        id="model-viewer"
        src="src/components/Cube copy 2/cube-def-5.95.glb"
        ar
        ar-modes="webxr scene-viewer quick-look"
        // camera-controls
        poster="poster.webp"
        shadow-intensity="0"
        auto-rotate
        camera-orbit-controls-auto-rotate-delay="50"
      >
        <div className="progress-bar hide" slot="progress-bar">
          <div className="update-bar"></div>
        </div>
        <button slot="ar-button" id="ar-button"></button>
        {/* <div id="ar-prompt"></div> */}
      </model-viewer>
    </div>
  );
}

export default Cubec;
