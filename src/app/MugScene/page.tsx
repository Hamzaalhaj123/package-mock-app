"use client";
import { Mug } from "@/components/Mug";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Link from "next/link";
import React from "react";

function MugScene() {
  return (
    <>
      <Link href="/">backkkkkkkkkk</Link>
      <Canvas
        shadows
        camera={{ position: [-10, 10, 15], fov: 25 }}
        className="z-0"
      >
        <ambientLight />
        <Mug />
        <OrbitControls />
      </Canvas>
    </>
  );
}

export default MugScene;
