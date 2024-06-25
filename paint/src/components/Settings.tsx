import { Html } from "@react-three/drei";
import { HsvaColorPicker } from "react-colorful";

import { usePaint } from "../hooks/usePaint";
import { settingsConfig } from "../constants";
import { reverseTransformSliderValue } from "../helpers";

export const Settings = () => {
  const {
    bristles,
    brushSize,
    color,
    colorMode,
    fluidity,
    handleClear,
    handleRedo,
    handleSave,
    handleSetColor,
    handleUndo,
    handleUpdateBristles,
    handleUpdateBrushSize,
    handleUpdateColorMode,
    handleUpdateFluidity,
    handleUpdateQuality,
    quality,
    three,
  } = usePaint();

  console.log("useThree gl context", three.gl.getContext());

  return (
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
              className={"quality" + (quality === "medium" ? " selected" : "")}
            >
              Medium
            </button>
            <button
              onClick={() => handleUpdateQuality("high")}
              className={"quality" + (quality === "high" ? " selected" : "")}
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
            min={settingsConfig.sliderMin.toString()}
            max={settingsConfig.sliderMax.toString()}
            onChange={handleUpdateFluidity}
            value={reverseTransformSliderValue(
              settingsConfig.fluidityMin,
              settingsConfig.fluidityMax,
              fluidity
            )}
          />
        </div>
        <div className="labeled-row">
          <div className="label">Bristle Count</div>
          <input
            type="range"
            className="slider"
            min={settingsConfig.sliderMin.toString()}
            max={settingsConfig.sliderMax.toString()}
            onChange={handleUpdateBristles}
            value={reverseTransformSliderValue(
              settingsConfig.bristlesMin,
              settingsConfig.bristlesMax,
              bristles
            )}
          />
        </div>
        <div className="labeled-row">
          <div className="label">Brush Size</div>
          <input
            type="range"
            className="slider"
            min={settingsConfig.sliderMin.toString()}
            max={settingsConfig.sliderMax.toString()}
            onChange={handleUpdateBrushSize}
            value={reverseTransformSliderValue(
              settingsConfig.brushSizeMin,
              settingsConfig.brushSizeMax,
              brushSize
            )}
          />
        </div>
        <div className="labeled-row">
          <div className="label">Paint Color</div>
          <div className="color-picker">
            <HsvaColorPicker color={color} onChange={handleSetColor} />
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
  );
};
