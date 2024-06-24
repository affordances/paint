import React from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { HsvaColorPicker } from "react-colorful";

import "./App.css";

const ConsoleLog = () => {
  const three = useThree();
  console.log("useThree gl context", three.gl.getContext());
  return null;
};

type Quality = "low" | "medium" | "high";
type ColorMode = "natural" | "digital";

function App() {
  const [quality, setQuality] = React.useState<Quality>("medium");
  const [colorMode, setColorMode] = React.useState<ColorMode>("natural");
  const [fluidity, setFluidity] = React.useState(60);
  const [bristles, setBristles] = React.useState(40);
  const [brushSize, setBrushSize] = React.useState(40);
  const [color, setColor] = React.useState({ h: 0, s: 0, v: 100, a: 1 });

  const handleClear = () => {
    console.log("clear");
  };

  const handleSave = () => {
    console.log("save");
  };

  const handleUpdateQuality = (newQuality: Quality) => {
    setQuality(newQuality);
  };

  const handleUpdateColorMode = (newColorMode: ColorMode) => {
    setColorMode(newColorMode);
  };

  const handleUpdateFluidity = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(parseInt(e.target.value, 10) / 10);
    setFluidity(parseInt(e.target.value, 10));
    // must divide by 10 to use
  };

  const handleUpdateBristles = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBristles(parseInt(e.target.value, 10));
  };

  const handleUpdateBrushSize = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBrushSize(parseInt(e.target.value, 10));
  };

  const handleUndo = () => {
    console.log("undo");
  };

  const handleRedo = () => {
    console.log("redo");
  };

  return (
    <div className="container">
      <Canvas>
        <ConsoleLog />
        <Html fullscreen>
          <div className="ui">
            <div className="buttons-row">
              <button className="clear-button" onClick={handleClear}>
                Clear
              </button>
              <button className="save-button" onClick={handleSave}>
                Save
              </button>
            </div>
            <div className="labeled-row">
              <div className="label">Quality</div>
              <div className="button-group">
                <button
                  onClick={() => handleUpdateQuality("low")}
                  className={"quality" + (quality === "low" ? " selected" : "")}
                >
                  Low
                </button>
                <button
                  onClick={() => handleUpdateQuality("medium")}
                  className={
                    "quality" + (quality === "medium" ? " selected" : "")
                  }
                >
                  Medium
                </button>
                <button
                  onClick={() => handleUpdateQuality("high")}
                  className={
                    "quality" + (quality === "high" ? " selected" : "")
                  }
                >
                  High
                </button>
              </div>
            </div>
            <div className="labeled-row">
              <div className="label">Color Mode</div>
              <div className="button-group">
                <button
                  onClick={() => handleUpdateColorMode("natural")}
                  className={
                    "color-mode" + (colorMode === "natural" ? " selected" : "")
                  }
                >
                  Natural
                </button>
                <button
                  onClick={() => handleUpdateColorMode("digital")}
                  className={
                    "color-mode" + (colorMode === "digital" ? " selected" : "")
                  }
                >
                  Digital
                </button>
              </div>
            </div>
            <div className="labeled-row">
              <div className="label">Paint Fluidity</div>
              <input
                type="range"
                className="slider"
                min="60"
                max="90"
                step="0.25"
                onChange={handleUpdateFluidity}
                value={fluidity}
              />
            </div>
            <div className="labeled-row">
              <div className="label">Bristle Count</div>
              <input
                type="range"
                className="slider"
                min="40"
                max="220"
                onChange={handleUpdateBristles}
                value={bristles}
              />
            </div>
            <div className="labeled-row">
              <div className="label">Brush Size</div>
              <input
                type="range"
                className="slider"
                min="40"
                max="220"
                onChange={handleUpdateBrushSize}
                value={brushSize}
              />
            </div>
            <div className="labeled-row">
              <div className="label">Paint Color</div>
              <div className="color-picker">
                <HsvaColorPicker color={color} onChange={setColor} />
              </div>
            </div>
            <div className="buttons-row">
              <button className="do-button active" onClick={handleUndo}>
                Undo
              </button>
              <button className="do-button" onClick={handleRedo}>
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
