"use client";
import ImageUploader from "@/components/ImageUploader";
import { Mug } from "@/components/Mug";
import ImageSrcContext from "@/context/imageSrcContext";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Link from "next/link";
import React, { useState } from "react";

function MugScene() {
  const [src1, setSrc1] = useState(null);
  return (
    <>
      <ImageSrcContext.Provider value={{ src1, setSrc1 }}>
        <ImageUploader />
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
      </ImageSrcContext.Provider>
    </>
  );
}

export default MugScene;
