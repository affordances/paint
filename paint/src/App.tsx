import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

import "./App.css";

import { Settings } from "./components/Settings";
import { AdvectShader } from "./components/ProjectProgram";
import { ShaderMesh } from "./components/DistanceConstraintProgram";

function App() {
  const positionsTexture = new THREE.Texture();
  const velocitiesTexture = new THREE.Texture();
  const randomsTexture = new THREE.Texture();

  return (
    <div className="container">
      <Canvas>
        <Settings />
        <AdvectShader
          positionsTexture={positionsTexture}
          velocitiesTexture={velocitiesTexture}
          randomsTexture={randomsTexture}
          damping={0.99}
          gravity={9.81}
        />
        <ShaderMesh />
      </Canvas>
    </div>
  );
}

export default App;
