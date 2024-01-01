"use client";
import ImageUploader from "@/components/ImageUploader";
import { Mug } from "@/components/Mug";
import { PizzaBox } from "@/components/PizzaBox";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Link from "next/link";
import React, { useState } from "react";
import ImageSrcContext, {
  DEFAULT_TEXTURE_SRC,
  ImageSrcContextType,
} from "@/context/imageSrcContext";

function PizzaBoxScene() {
  const [src1, setSrc1] = useState<string>(DEFAULT_TEXTURE_SRC);

  return (
    <>
      <Link href="/">backkkkkkkkkk</Link>
      <ImageSrcContext.Provider value={{ src1, setSrc1 }}>
        <ImageUploader />
        <Canvas
          shadows
          camera={{ position: [-10, 10, 15], fov: 25 }}
          className="z-0"
        >
          <ambientLight />
          <PizzaBox />

          <OrbitControls />
        </Canvas>
      </ImageSrcContext.Provider>
    </>
  );
}

export default PizzaBoxScene;
