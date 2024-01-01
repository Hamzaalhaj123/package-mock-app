"use client";
import ImageSrcContext from "@/context/imageSrcContext";
import Image from "next/image";
import React, { useState, ChangeEvent, useContext } from "react";

const ImageUploader: React.FC = () => {
  const [imageSrc, setImageSrc] = useState<string>("");
  const context = useContext(ImageSrcContext);

  if (!context) {
    return null;
  }

  const { setSrc1 } = context;

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result as string);
        setSrc1(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {imageSrc && (
        <div>
          <h2>Preview:</h2>
          <Image
            src={imageSrc}
            alt="Uploaded"
            style={{ maxWidth: "100%", maxHeight: "300px" }}
          />
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
