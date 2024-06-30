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

export const vertexShaderSource = `
  attribute vec4 a_position;

  void main() {
    gl_Position = a_position;
  }`;

export const fragmentShaderSource = `
  precision mediump float;

  void main() {
    gl_FragColor = vec4(1, 0, 0.5, 1);
  }
    `;
