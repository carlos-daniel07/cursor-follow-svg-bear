const head = document.querySelector('.head');
const eyes = document.querySelector('.eyes');
const snout = document.querySelector('.snout');
const nose = document.querySelector('.nose');
const ears = document.querySelector('.ears');
console.log(eyes)

let cursorPosition = {x:0,y:0};
let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight;
function updateScreenSize () {
  screenWidth = window.innerWidth;
  screenHeight = window.innerHeight;
}

function updatePositionMouse (e) {
  cursorPosition = {x:e.clientX, y:e.clientY}
  updateElementsPosition();
}

function updateTouch (e) {
    cursorPosition = {x:e.targetTouches[0].offsetX, y:e.touches[0].offsetY}
    console.log(cursorPosition)
    updateElementsPosition();
}

function followCursor (element, xRatio, yRatio) {
  let dataElement = element.getBoundingClientRect();
  let elementCenterX = dataElement.x + (dataElement.width /2);
  let elementCenterY = dataElement.y + (dataElement.height /2);

  let distanceCursorX = Math.round (((cursorPosition.x - elementCenterX)*100)/screenWidth);
  let distanceCursorY = Math.round (((cursorPosition.y - elementCenterY)*100)/screenHeight);

  element.style.transform = `translate(${distanceCursorX / xRatio}px, ${distanceCursorY/yRatio}px )`;
}

function updateElementsPosition () {
  if (eyes) followCursor(eyes,2,2)
  if (nose) followCursor(nose,1,1)
  if (head) followCursor(head,5,5)
  if (snout) followCursor(snout,2,2)
  if (ears) followCursor(ears,0,0)
    console.log("actualizando")
}

window.addEventListener('mousemove', updatePositionMouse);
window.addEventListener('resize', updateScreenSize);
window.addEventListener('touchmove', updateTouch);
