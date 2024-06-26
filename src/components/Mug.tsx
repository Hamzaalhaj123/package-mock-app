"use client";
import ImageSrcContext from "@/context/imageSrcContext";
import { Decal, Text, useGLTF, useTexture } from "@react-three/drei";
import { useControls } from "leva";
import React, { useContext, useState } from "react";
// import { Texture } from "@react-three/fiber";

import { degToRad } from "three/src/math/MathUtils.js";
import { Euler, Vector3 } from "three";
import { GLTF } from "three-stdlib";
import { DEFAULT } from "@react-three/fiber/dist/declarations/src/core/utils";

type GLTFResult = GLTF & {
  nodes: {
    Arc001_1: THREE.Mesh;
    Arc001_1_1: THREE.Mesh;
    Arc001_1_2: THREE.Mesh;
    Arc001_1_3: THREE.Mesh;
    Arc001_1_4: THREE.Mesh;
  };
  materials: {
    ["01___Default-2"]: THREE.MeshStandardMaterial;
    ["02___Default-2"]: THREE.MeshStandardMaterial;
    ["02___Default"]: THREE.MeshStandardMaterial;
    ["01___Default"]: THREE.MeshStandardMaterial;
    printable: THREE.MeshStandardMaterial;
  };
};
// Mugs by Poly by Google [CC-BY] (https://creativecommons.org/licenses/by/3.0/) via Poly Pizza (https://poly.pizza/m/8cBJ9XWbkiv)
export function Mug(props: JSX.IntrinsicElements["group"]) {
  const DEFAULTS = {
    pos: [0, 1.88, 1],
    rotation: [degToRad(0), degToRad(125), degToRad(0)],
    scale: [1.5, 1.5, 1.5],
  };

  const [pos, setPos] = useState<Vector3>(new Vector3(...DEFAULTS.pos));

  const [rotation, setRotation] = useState<Euler>(
    new Euler(...DEFAULTS.rotation)
  );
  const [scale, setScale] = useState<Vector3>(new Vector3(...DEFAULTS.scale));

  const context = useContext(ImageSrcContext);

  const { src1, setSrc1 } = context;

  const texture = useTexture(src1);
  const { nodes, materials } = useGLTF("/models/mug.glb") as GLTFResult;

  useControls({
    angle: {
      min: degToRad(60),
      max: degToRad(300),
      value: DEFAULTS.rotation[1],
      step: 0.01,
      onChange: (value) => {
        const x = Math.cos(value);
        const z = Math.sin(value);
        const rot = Math.atan2(x, z);

        setRotation(() => new Euler(0, rot, 0));
        setPos((pos) => new Vector3(x, pos.y, z));
      },
    },
    posY: {
      min: 0,
      max: 3,
      value: DEFAULTS.pos[1],
      step: 0.01,
      onChange: (value) => {
        setPos((pos) => new Vector3(pos.x, value, pos.z));
      },
    },
    scale: {
      min: 0.5,
      max: 3,
      value: DEFAULTS.scale[0],
      step: 0.01,
      onChange: (value) => {
        setScale(() => new Vector3(value, value, 1.5));
      },
    },

    resetTheImage: {
      value: false,
      onChange: (value) => {
        if (value) {
          setScale(() => new Vector3(...DEFAULTS.scale));

          setRotation((prevRotation) => new Euler(0, -0.6108652381980155, 0));
          setPos(
            (pos) =>
              new Vector3(
                -0.5735764363510462,
                DEFAULTS.pos[1],
                0.8191520442889917
              )
          );
        }
      },
    },
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Arc001_1.geometry}
        material={materials["01___Default-2"]}
      />
      <mesh
        geometry={nodes.Arc001_1_1.geometry}
        material={materials["02___Default-2"]}
      />
      <mesh
        geometry={nodes.Arc001_1_2.geometry}
        material={materials["02___Default"]}
      />
      <mesh
        geometry={nodes.Arc001_1_3.geometry}
        material={materials["01___Default"]}
      />
      <mesh geometry={(nodes.Arc001_1_4 as THREE.Mesh).geometry}>
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
            polygonOffsetFactor={-1} // The mesh should take precedence over the original
          />
        </Decal>
      </mesh>
    </group>
  );
}

useGLTF.preload("/models/mug.glb");
