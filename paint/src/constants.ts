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
  webGl: [
    // first vertex
    0, 0.4,
    // second vertex
    -0.2, 0,
    // third vertex
    0.2, 0,
  ],
  // make all into floats, add 0.0 as third coordinate to each vertex
  threeAndR3f: [
    // first vertex
    0.0, 0.4, 0.0,
    // second vertex
    -0.2, 0.0, 0.0,
    // third vertex
    0.2, 0.0, 0.0,
  ],
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
