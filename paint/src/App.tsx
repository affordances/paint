import { useEffect, useRef } from "react";
// import { Canvas } from "@react-three/fiber";
// import * as THREE from "three";

import "./App.css";

// import { Settings } from "./components/Settings";
import { webGlMain } from "./components/webgl";
import { ThreeJs } from "./components/threejs";

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
    </div>
  );
}

export default App;
