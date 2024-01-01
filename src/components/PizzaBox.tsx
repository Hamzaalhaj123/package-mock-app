/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { Euler, Vector3 } from "three";
import React, { useContext, useRef, useState } from "react";
import { Decal, useGLTF, useTexture } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useControls } from "leva";
import { degToRad } from "three/src/math/MathUtils.js";
import ImageSrcContext from "@/context/imageSrcContext";

type GLTFResult = GLTF & {
  nodes: {
    pizzaBox: THREE.Mesh;
    lid_1: THREE.Mesh;
    lid_1_1: THREE.Mesh;
  };
  materials: {
    _defaultMat: THREE.MeshStandardMaterial;
    ["frontFace.001"]: THREE.MeshStandardMaterial;
  };
};

export function PizzaBox(props: JSX.IntrinsicElements["group"]) {
  const [pos, setPos] = useState<Vector3>(new Vector3(...[-0.3, 0.5, 0]));

  const [rotation, setRotation] = useState<Euler>(new Euler(...[1, 1, 5.2]));
  const [scale, setScale] = useState<Vector3>(new Vector3(...[0.6, 0.6, 0.6]));

  const context = useContext(ImageSrcContext);

  const { src1 } = context;

  const texture = useTexture(src1 || "/textures/sadasd.png");

  const { inDebugMode } = useControls({
    inDebugMode: false,
    posX: {
      min: -1,
      max: 1,
      value: -0.14,
      step: 0.01,
      onChange: (value) => {
        setPos((pos) => new Vector3(value, pos.y, pos.z));
      },
    },
    posY: {
      min: -1,
      max: 1,
      value: 0.45,
      step: 0.01,
      onChange: (value) => {
        setPos((pos) => new Vector3(pos.x, value, pos.z));
      },
    },
    posZ: {
      min: -1,
      max: 1,
      value: 0,
      step: 0.01,
      onChange: (value) => {
        setPos((pos) => new Vector3(pos.x, pos.y, value));
      },
    },
    rotateX: {
      min: degToRad(0),
      max: degToRad(360),
      value: 0,
      step: 0.01,
      onChange: (value) => {
        setRotation(
          (prevRotation) => new Euler(value, prevRotation.y, prevRotation.z)
        );
      },
    },
    rotateY: {
      min: degToRad(-360),
      max: degToRad(360),
      value: degToRad(-90),
      step: 0.01,
      onChange: (value) => {
        setRotation(
          (prevRotation) => new Euler(prevRotation.x, value, prevRotation.z)
        );
      },
    },
    // For Z-axis rotation
    rotateZ: {
      min: degToRad(0),
      max: degToRad(360),
      value: 0,
      step: 0.01,
      onChange: (value) => {
        const rotZ = value;
        setRotation(
          (prevRotation) => new Euler(prevRotation.x, prevRotation.y, rotZ)
        );
      },
    },
    scaleTheImage: {
      min: 0.1,
      max: 3,
      value: 0.84,
      step: 0.01,
      onChange: (value) => {
        setScale(() => new Vector3(value, value, value));
      },
    },
  });
  const { nodes, materials } = useGLTF("/models/pizzaBox.glb") as GLTFResult;

  return (
    <group {...props} dispose={null} scale={4}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pizzaBox.geometry}
        material={materials._defaultMat}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lid_1.geometry}
        material={materials._defaultMat}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lid_1_1.geometry}
        material={materials["frontFace.001"]}
      >
        <meshBasicMaterial transparent opacity={0} />
        <Decal
          debug // Makes "bounding box" of the decal visible
          position={pos} // Position of the decal
          rotation={rotation} // Rotation of the decal (can be a vector or a degree in radians)
          scale={scale} // Scale of the decal
        >
          <meshStandardMaterial
            map={texture}
            toneMapped={false}
            transparent
            polygonOffset
            polygonOffsetFactor={-1}
          />
        </Decal>
      </mesh>
    </group>
  );
}

useGLTF.preload("/pizzaBox.glb");
