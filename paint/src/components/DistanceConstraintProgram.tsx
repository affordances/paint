import { useRef } from "react";
import { extend, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";

import vertexShader from "../shaders/fullscreen.vert";
import fragmentShader from "../shaders/distanceconstraint.frag";

class CustomShaderMaterial extends THREE.RawShaderMaterial {
  constructor() {
    super({
      vertexShader,
      fragmentShader,
      uniforms: {
        u_pass: { value: 0 },
        u_resolution: { value: new THREE.Vector2() },
        u_positionsTexture: { value: null },
        u_pointCount: { value: 0 },
        u_targetDistance: { value: 1.0 },
      },
    });
  }
}

extend({ CustomShaderMaterial });
export { CustomShaderMaterial };

export const ShaderMesh = () => {
  const shaderMaterialRef = useRef<CustomShaderMaterial>(null!);
  //   const texture = useLoader(TextureLoader, "/path/to/your/texture.png");

  useFrame(({ size }) => {
    if (shaderMaterialRef.current) {
      shaderMaterialRef.current.uniforms.u_resolution.value.set(
        size.width,
        size.height
      );
      //   shaderMaterialRef.current.uniforms.u_positionsTexture.value = texture;
    }
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <customShaderMaterial
        ref={shaderMaterialRef}
        u_pass={0}
        u_pointCount={100}
        u_targetDistance={1.0}
      />
    </mesh>
  );
};
