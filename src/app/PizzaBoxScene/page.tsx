"use client";
import { Mug } from "@/components/Mug";
import { PizzaBox } from "@/components/PizzaBox";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Link from "next/link";
import React from "react";

function PizzaBoxScene() {
  return (
    <>
      <Link href="/">backkkkkkkkkk</Link>
      <Canvas
        shadows
        camera={{ position: [-10, 10, 15], fov: 25 }}
        className="z-0"
      >
        <ambientLight />
        <PizzaBox />
        <OrbitControls />
      </Canvas>
    </>
  );
}

export default PizzaBoxScene;
