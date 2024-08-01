import React, { useRef } from "react";
import { extend, useFrame } from "@react-three/fiber";
import * as THREE from "three";

import vertexShader from "../shaders/fullscreen.vert";
import fragmentShader from "../shaders/project.frag";

class AdvectMaterial extends THREE.RawShaderMaterial {
  constructor() {
    super({
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      uniforms: {
        u_resolution: {
          value: new THREE.Vector2(1, 1),
        },
        u_positionsTexture: {
          value: null as unknown as THREE.Texture,
        },
        u_velocitiesTexture: {
          value: null as unknown as THREE.Texture,
        },
        u_randomsTexture: {
          value: null as unknown as THREE.Texture,
        },
        u_damping: {
          value: 0.99,
        },
        u_gravity: {
          value: 9.81,
        },
        u_verticesPerBristle: {
          value: 10,
        },
      },
    });
  }
}

extend({ AdvectMaterial });
export { AdvectMaterial };

type AdvectShaderProps = {
  positionsTexture: THREE.Texture;
  velocitiesTexture: THREE.Texture;
  randomsTexture: THREE.Texture;
  damping: number;
  gravity: number;
};

export const AdvectShader: React.FC<AdvectShaderProps> = ({
  positionsTexture,
  velocitiesTexture,
  randomsTexture,
  damping,
  gravity,
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ size }) => {
    const { width, height } = size;

    const material = meshRef.current?.material as THREE.RawShaderMaterial;

    if (material) {
      material.uniforms.u_resolution.value.set(width, height);
      material.uniforms.u_positionsTexture.value = positionsTexture;
      material.uniforms.u_velocitiesTexture.value = velocitiesTexture;
      material.uniforms.u_randomsTexture.value = randomsTexture;
      material.uniforms.u_damping.value = damping;
      material.uniforms.u_gravity.value = gravity;
      material.uniformsNeedUpdate = true;
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <advectMaterial />
    </mesh>
  );
};
