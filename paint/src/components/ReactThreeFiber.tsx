import * as THREE from "three";
import { extend } from "@react-three/fiber";
import { fragmentShaderSource, vertexShaderSource } from "../constants";

class ReactThreeFiber extends THREE.RawShaderMaterial {
  constructor() {
    super({
      vertexShader: vertexShaderSource,
      fragmentShader: fragmentShaderSource,
    });
  }
}

extend({ ReactThreeFiber });

export { ReactThreeFiber };
