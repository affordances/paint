import * as THREE from "three";

import { CustomShaderMaterial } from "./components/DistanceConstraintProgram";
import { AdvectMaterial } from "./shaders/ProjectProgram";

declare module "@react-three/fiber" {
  interface ThreeElements {
    advectMaterial: THREE.RawShaderMaterial<
      AdvectMaterial,
      typeof AdvectMaterial
    >;
    customShaderMaterial: THREE.RawShaderMaterial<
      CustomShaderMaterial,
      typeof CustomShaderMaterial
    >;
  }
}
