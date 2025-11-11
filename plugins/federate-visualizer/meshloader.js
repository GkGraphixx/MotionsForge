export function loadMesh(gl) {
  if (!gl) {
    console.error('WebGL not supported');
    return;
  }

  gl.clearColor(0.1, 0.1, 0.1, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);

  // Placeholder: Load mesh data here
  console.log('Mesh viewer initialized');
}
