import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

function Cube(props) {
  const { nodes, materials } = useGLTF("/src/components/Cube/cube.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.Sides}
        position={[0.5, -0.46, -0.36]}
        rotation={[0.42, 0.41, -0.34]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={nodes.Plane.material}
        position={[-1.21, -1.44, -0.49]}
        rotation={[0, 0, -Math.PI / 2]}
      />
    </group>
  );
}

export default function App() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <Cube />
    </Canvas>
  );
}
