import { useEffect, useRef } from "react";
import * as THREE from "three";
import { Canvas, extend } from "@react-three/fiber";

import "./App.css";

// import { Settings } from "./components/Settings";
import { WebGLMain } from "./components/WebGL";
import { ThreeJS } from "./components/ThreeJS";
import { ReactThreeFiber } from "./components/ReactThreeFiber";
import { vertices } from "./constants";

extend({ ReactThreeFiber });

const ReactThreeFiberExample = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.RawShaderMaterial>(null);

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
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (ref.current) {
      WebGLMain(ref.current);
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
        <ThreeJS />
      </div>
      <div className="example">
        <div className="label">react-three-fiber</div>
        <Canvas>
          <ReactThreeFiberExample />
        </Canvas>
      </div>
    </div>
  );
}

export default App;
