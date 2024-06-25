import React from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { HsvaColorPicker } from "react-colorful";

import "./App.css";

const ConsoleLog = () => {
  const three = useThree();
  // console.log("useThree gl context", three.gl.getContext());
  return null;
};

type Quality = "low" | "medium" | "high";
type ColorMode = "natural" | "digital";

const sliderMin = 0;
const sliderMax = 240;
const fluidityMin = 0.6;
const fluidityMax = 0.9;
const bristlesMin = 0;
const bristlesMax = 1;
const brushSizeMin = 5;
const brushSizeMax = 75;

const transformSliderValue = (
  minNew: number,
  maxNew: number,
  value: number
): number => {
  return (
    minNew + ((value - sliderMin) / (sliderMax - sliderMin)) * (maxNew - minNew)
  );
};

const reverseTransformSliderValue = (
  minNew: number,
  maxNew: number,
  value: number
): number =>
  sliderMin + ((value - minNew) / (maxNew - minNew)) * (sliderMax - sliderMin);

function App() {
  const [quality, setQuality] = React.useState<Quality>("medium");
  const [colorMode, setColorMode] = React.useState<ColorMode>("natural");
  const [fluidity, setFluidity] = React.useState(fluidityMin);
  const [bristles, setBristles] = React.useState(bristlesMin);
  const [brushSize, setBrushSize] = React.useState(brushSizeMin);
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
    const value = parseFloat(e.target.value);
    setFluidity(transformSliderValue(fluidityMin, fluidityMax, value));
  };

  const handleUpdateBristles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setBristles(transformSliderValue(bristlesMin, bristlesMax, value));
  };

  const handleUpdateBrushSize = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setBrushSize(transformSliderValue(brushSizeMin, brushSizeMax, value));
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
                min={sliderMin.toString()}
                max={sliderMax.toString()}
                onChange={handleUpdateFluidity}
                value={reverseTransformSliderValue(
                  fluidityMin,
                  fluidityMax,
                  fluidity
                )}
              />
            </div>
            <div className="labeled-row">
              <div className="label">Bristle Count</div>
              <input
                type="range"
                className="slider"
                min={sliderMin.toString()}
                max={sliderMax.toString()}
                onChange={handleUpdateBristles}
                value={reverseTransformSliderValue(
                  bristlesMin,
                  bristlesMax,
                  bristles
                )}
              />
            </div>
            <div className="labeled-row">
              <div className="label">Brush Size</div>
              <input
                type="range"
                className="slider"
                min={sliderMin.toString()}
                max={sliderMax.toString()}
                onChange={handleUpdateBrushSize}
                value={reverseTransformSliderValue(
                  brushSizeMin,
                  brushSizeMax,
                  brushSize
                )}
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
