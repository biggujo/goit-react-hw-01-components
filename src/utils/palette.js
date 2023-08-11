import chroma from 'chroma-js';

export function createPalette(size) {
  if (size < 0) {
    return null;
  }

  return chroma.scale([
    chroma.random().luminance(0.4).brighten(1.5).desaturate(),
    chroma.random().luminance(0.5).brighten(),
  ])
  .mode('lch').colors(size);
}
