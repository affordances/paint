import React from "react";
import { RootState, useThree } from "@react-three/fiber";

import { settingsConfig } from "../constants";
import { transformSliderValue } from "../helpers";
import { Quality, ColorMode, Color } from "../types";

export type PaintState = {
  bristles: number;
  brushSize: number;
  color: Color;
  colorMode: ColorMode;
  fluidity: number;
  handleClear: () => void;
  handleRedo: () => void;
  handleSave: () => void;
  handleSetColor: (c: Color) => void;
  handleUndo: () => void;
  handleUpdateBristles: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleUpdateBrushSize: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleUpdateColorMode: (c: ColorMode) => void;
  handleUpdateFluidity: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleUpdateQuality: (q: Quality) => void;
  quality: Quality;
  three: RootState;
};

export const usePaint = (): PaintState => {
  const [quality, setQuality] = React.useState<Quality>("medium");
  const [colorMode, setColorMode] = React.useState<ColorMode>("natural");
  const [fluidity, setFluidity] = React.useState(settingsConfig.fluidityMin);
  const [bristles, setBristles] = React.useState(settingsConfig.bristlesMin);
  const [brushSize, setBrushSize] = React.useState(settingsConfig.brushSizeMin);
  const [color, setColor] = React.useState<Color>({ h: 0, s: 0, v: 100, a: 1 });

  const three = useThree();

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

  const handleSetColor = (newColor: Color) => {
    setColor(newColor);
  };

  const handleUpdateFluidity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFluidity(
      transformSliderValue(
        settingsConfig.fluidityMin,
        settingsConfig.fluidityMax,
        parseFloat(e.target.value)
      )
    );
  };

  const handleUpdateBristles = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBristles(
      transformSliderValue(
        settingsConfig.bristlesMin,
        settingsConfig.bristlesMax,
        parseFloat(e.target.value)
      )
    );
  };

  const handleUpdateBrushSize = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBrushSize(
      transformSliderValue(
        settingsConfig.brushSizeMin,
        settingsConfig.brushSizeMax,
        parseFloat(e.target.value)
      )
    );
  };

  const handleUndo = () => {
    console.log("undo");
  };

  const handleRedo = () => {
    console.log("redo");
  };

  return {
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
  };
};
