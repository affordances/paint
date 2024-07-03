import { useEffect, useRef } from "react";
import * as THREE from "three";
import { Canvas, extend } from "@react-three/fiber";

import "./App.css";

// import { Settings } from "./components/Settings";
import { webGlMain } from "./components/webgl";
import { ThreeJs } from "./components/Threejs";
import { ReactThreeFiber } from "./components/ReactThreeFiber";
import { vertices } from "./constants";

extend({ ReactThreeFiber });

const ShaderPlane = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const positions = new Float32Array(vertices.threeAndR3f);

  return (
    <mesh ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <reactThreeFiber ref={materialRef} />
    </mesh>
  );
};

function App() {
  const ref = useRef(null);

  useEffect(() => {
    if (ref) {
      webGlMain(ref.current);
    }
  });

  return (
    <div className="comparison">
      <div className="example">
        <div className="label">webgl</div>
        <canvas ref={ref}></canvas>
      </div>
      <div className="example">
        <div className="label">threejs</div>
        <ThreeJs />
      </div>
      <div className="example">
        <div className="label">react-three-fiber</div>
        <Canvas>
          <ShaderPlane />
        </Canvas>
      </div>
    </div>
  );
}

export default App;
