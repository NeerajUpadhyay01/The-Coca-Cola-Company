import React, { useEffect, useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import gsap from "gsap";

const ModelTemplate = (props) => {
  const gltf = useLoader(GLTFLoader, props.model);
  useEffect(() => {
    if (gltf) {
      if (props.scale) {
        gltf.scene.scale.set(props.scale[0], props.scale[1], props.scale[2]);
      }
      if (props.position) {
        gltf.scene.position.set(
          props.position[0],
          props.position[1],
          props.position[2]
        );
      }
      if (props.rotation) {
        gltf.scene.rotation.set(
          props.rotation[0],
          props.rotation[1],
          props.rotation[2]
        );
      }
    }
  }, [gltf]);

  if (props.orbitRotation) {
    useFrame((state, delta) => {
      gltf.scene.rotation.y -= delta + 0.01;
    });
  }

  return <primitive object={gltf.scene} />;
};

export default ModelTemplate;
