import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import gsap from "gsap";
import ModelTemplate from "./ModelTemplate";

function CanvasTemplate(props) {
  return (
    <div id="container3D">
      <Canvas gl={{ alpha: true }}>
        {props.orbitControl && <OrbitControls makeDefault />}
        <ambientLight intensity={7.5} />
        <directionalLight intensity={4.5} position={[7, 5, 5]} />
        <directionalLight intensity={4.5} position={[5, -1, 5]} />
        <PerspectiveCamera
          makeDefault
          position={[0, 0, 2]}
          fov={75}
          near={0.1}
          far={1000}
          aspect={window.innerWidth / window.innerHeight}
        />
        <ModelTemplate
          model={props.model}
          position={props.position}
          scale={props.scale}
          rotation={props.rotation}
          orbitRotation={props.orbitRotation}
        />
      </Canvas>
    </div>
  );
}

export default CanvasTemplate;
