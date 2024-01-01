import { Dispatch, SetStateAction, createContext } from "react";
export interface ImageSrcContextType {
  src1: string;
  setSrc1: Dispatch<SetStateAction<string>>;
}

const ImageSrcContext = createContext<ImageSrcContextType | null>(null);

export default ImageSrcContext;
