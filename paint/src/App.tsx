// import React from "react";
import { Canvas } from "@react-three/fiber";

import "./App.css";

import { Settings } from "./components/Settings";

function App() {
  return (
    <div className="container">
      <Canvas>
        <Settings />
        <mesh />
      </Canvas>
    </div>
  );
}

export default App;
