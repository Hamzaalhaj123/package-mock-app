"use client";
import ImageUploader from "@/components/ImageUploader";
import { Mug } from "@/components/Mug";
import ImageSrcContext, {
  ImageSrcContextType,
} from "@/context/imageSrcContext";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Link from "next/link";
import React, { Dispatch, SetStateAction, useState } from "react";

function MugScene() {
  const [src1, setSrc1] = useState("");
  const contextValue: ImageSrcContextType = {
    src1,
    setSrc1,
  };
  return (
    <>
      <ImageSrcContext.Provider value={contextValue}>
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
