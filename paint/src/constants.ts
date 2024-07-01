// import { shaderMaterial } from "@react-three/drei";
// import { extend } from "@react-three/fiber";

export const settingsConfig = {
  sliderMin: 0,
  sliderMax: 240,
  fluidityMin: 0.6,
  fluidityMax: 0.9,
  bristlesMin: 0,
  bristlesMax: 1,
  brushSizeMin: 5,
  brushSizeMax: 75,
};

export const vertices = {
  webGl: [0, 0, 0, 0.5, 0.7, 0],
  three: [0.0, 0.5, 0.0, 0.0, 0.0, 0.0, 0.7, 0.0, 0.0],
};

export const vertexShaderSource = `
  attribute vec4 position;

  void main() {
    gl_Position = position;
  }`;

export const fragmentShaderSource = `
  precision mediump float;

  void main() {
    gl_FragColor = vec4(1.0, 0.0, 0.5, 1.0);
  }
    `;

// export const BlahMaterial = shaderMaterial(
//   {},
//   vertexShaderSource,
//   fragmentShaderSource
// );

// extend({ BlahMaterial });
