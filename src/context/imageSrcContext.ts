import { Dispatch, SetStateAction, createContext } from "react";
export interface ImageSrcContextType {
  src1: string;
  setSrc1: Dispatch<SetStateAction<string>>;
}
export const DEFAULT_TEXTURE_SRC = "/textures/sadasd.png";
const ImageSrcContext = createContext<{
  src1: string;
  setSrc1: React.Dispatch<React.SetStateAction<string>>;
}>({
  src1: DEFAULT_TEXTURE_SRC,
  setSrc1: () => {},
});
export default ImageSrcContext;
