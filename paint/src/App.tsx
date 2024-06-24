// import React from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Html } from "@react-three/drei";

import "./App.css";

const ConsoleLog = () => {
  const three = useThree();
  console.log("useThree gl context", three.gl.getContext());
  return null;
};

function App() {
  return (
    <div className="container">
      <Canvas>
        <ConsoleLog />
        <Html fullscreen>
          <div className="ui">
            <div className="buttons-row">
              <button
                className="clear-button"
                onClick={() => console.log("clear")}
              >
                Clear
              </button>
              <button
                className="save-button"
                onClick={() => console.log("save")}
              >
                Save
              </button>
            </div>
            <div className="labeled-row">
              <div className="label">Quality</div>
              <div className="button-group">
                <button className="quality">Low</button>
                <button className="quality selected">Medium</button>
                <button className="quality">High</button>
              </div>
            </div>
            <div className="labeled-row">
              <div className="label">Color Mode</div>
              <div className="button-group">
                <button className="color-mode selected">Medium</button>
                <button className="color-mode">High</button>
              </div>
            </div>
            <div className="labeled-row">
              <div className="label">Paint Fluidity</div>
              <input type="range" className="slider" />
            </div>
            <div className="labeled-row">
              <div className="label">Bristle Count</div>
              <input type="range" className="slider" />
            </div>
            <div className="labeled-row">
              <div className="label">Brush Size</div>
              <input type="range" className="slider" />
            </div>
            <div className="labeled-row">
              <div className="label">Paint Color</div>
              <div className="color-picker"></div>
            </div>
            <div className="buttons-row">
              <button
                className="do-button active"
                onClick={() => console.log("undo")}
              >
                Undo
              </button>
              <button className="do-button" onClick={() => console.log("redo")}>
                Redo
              </button>
            </div>
            <div className="instructions">
              <span>Click and hold</span> to paint
              <br />
              <span>Scroll</span> to change brush size
              <br />
              <span>Space + drag</span> to pan
              <br />
              <span>Drag edges</span> to resize canvas
            </div>
            <div className="footer">
              <a href="http://david.li">david.li</a> |{" "}
              <a href="http://github.com/dli/paint">Source code</a>
            </div>
          </div>
        </Html>
        <mesh />
      </Canvas>
    </div>
  );
}

export default App;
