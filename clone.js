const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let isCloning = false;
let isErasing = false;
let isBrushing = false;
let cloneData;
let historyStack = [];
let redoStack = [];
let lastX, lastY;
let sourcePointX, sourcePointY;

canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', endPosition);
// Other JavaScript functions and event listeners as provided in the script tag in HTML.
