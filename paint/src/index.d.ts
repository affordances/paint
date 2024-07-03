import * as THREE from "@react-three/fiber";

import { ReactThreeFiber } from "./components/ReactThreeFiber";

declare module "@react-three/fiber" {
  interface ThreeElements {
    reactThreeFiber: THREE.RawShaderMaterial<
      ReactThreeFiber,
      typeof ReactThreeFiber
    >;
  }
}
