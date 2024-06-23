// import React from "react";
import { Canvas, useThree } from "@react-three/fiber";

import "./App.css";

const ConsoleLog = () => {
  const three = useThree();

  // console.log(
  //   three.gl.getContext().getParameter(three.gl.getContext().MAX_VERTEX_ATTRIBS)
  // );

  console.log(three.gl.getContext());

  return null;
};

function App() {
  return (
    <Canvas>
      <mesh />
      <ConsoleLog />
    </Canvas>
  );
}

export default App;
