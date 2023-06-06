import React from "react";
import "./cubec.scss";

function Cubec(props) {
  return (
    <>
      <div id="model-container" className="cube__container">
        <model-viewer
          id="model-viewer"
          src="src/components/Cube copy 2/cube-def-5.glb"
          ar
          ar-modes="webxr scene-viewer quick-look"
          camera-controls
          poster="poster.webp"
          shadow-intensity="0"
          auto-rotate
          camera-orbit-controls-auto-rotate-delay="50"
        >
          <div class="progress-bar hide" slot="progress-bar">
            <div class="update-bar"></div>
          </div>
          <button slot="ar-button" id="ar-button"></button>
          {/* <div id="ar-prompt"></div> */}
        </model-viewer>
      </div>
    </>
  );
}

// // Obtener el elemento del modelo y el contenedor
// const modelViewer = document.getElementById("model-viewer");
// const modelContainer = document.getElementById("model-container");

// // Función para controlar la rotación del modelo
// function handleScroll() {
//   // Obtener la posición de desplazamiento vertical
//   const scrollTop = window.scrollY || window.pageYOffset;

//   // Calcular el ángulo de rotación basado en la posición de desplazamiento
//   const rotationAngle = scrollTop * 0.5; // Ajusta el factor según la velocidad de rotación deseada

//   // Aplicar la rotación al modelo
//   modelViewer.cameraOrbit = `${rotationAngle}deg 0deg 0deg`;
// }

// // Asignar el controlador de eventos al desplazamiento de la página
// window.addEventListener("scroll", handleScroll);

//OPCION B
// Función para generar un ángulo de rotación aleatorio
function getRandomRotationAngle() {
  return Math.floor(Math.random() * 360); // Generar un ángulo aleatorio entre 0 y 360 grados
}

// Función para controlar la rotación del modelo
function handleScroll() {
  // Obtener la posición de desplazamiento vertical
  const scrollTop = window.scrollY || window.pageYOffset;

  // Generar ángulos de rotación aleatorios en cada eje
  const rotationX = getRandomRotationAngle();
  const rotationY = getRandomRotationAngle();
  const rotationZ = getRandomRotationAngle();

  // Aplicar la rotación al modelo
  modelViewer.cameraOrbit = `${rotationX}deg ${rotationY}deg ${rotationZ}deg`;
}

export default Cubec;
