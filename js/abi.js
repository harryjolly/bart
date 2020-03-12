var context = document.getElementById('canvas');
var ctx = context.getContext('2d');

canvasHeight = context.height; // Canvas Height
canvasWidth = context.width; // Canvas Width
centerY = canvasHeight / 2; // Center Y
centerX = canvasWidth / 2;

ctx.beginPath();
ctx.lineCap = 'round';
ctx.lineWidth = 14;
ctx.strokeStyle = 'black';

/* Function to draw the image edges and fill color */

function drawRightFaceEdge() {
    ctx.moveTo(centerX, centerY - 285);
    ctx.lineTo(centerX - 20, centerY - 242); // hair
    ctx.lineTo(centerX - 48, centerY - 275);
    ctx.lineTo(centerX - 62, centerY - 240);
    ctx.lineTo(centerX - 84, centerY - 265);
    ctx.lineTo(centerX - 98, centerY - 240);
    ctx.lineTo(centerX - 123, centerY - 256);
    ctx.lineTo(centerX - 130, centerY - 225);
     //context.bezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y) REF: https://www.w3schools.com/tags/canvas_beziercurveto.asp
    ctx.bezierCurveTo(centerX - 150, centerY - 240, centerX - 168, centerY - 270, centerX - 160, centerY - 200); //hair curves
    ctx.bezierCurveTo(centerX - 160, centerY - 200, centerX - 150, centerY - 150, centerX - 150, centerY - 80); //hair curves down
    ctx.bezierCurveTo(centerX - 156, centerY - 60, centerX - 162, centerY - 40, centerX - 142, centerY - 20); // eye brow curves
    ctx.bezierCurveTo(centerX - 148, centerY, centerX - 148, centerY + 30, centerX - 139, centerY + 45); //eye edge
    ctx.bezierCurveTo(centerX - 174, centerY + 52, centerX - 169, centerY + 109, centerX - 134, centerY + 122); //ear
    ctx.bezierCurveTo(centerX - 134, centerY + 122, centerX - 155, centerY + 170, centerX - 69, centerY + 210); //cheeks
    ctx.lineTo(centerX - 69, centerY + 245); //neck
    ctx.bezierCurveTo(centerX - 55, centerY + 255, centerX - 30, centerY + 260, centerX, centerY + 265); //neck (join)
}
/*Function to flip the half of face */
function drawLeftFaceEdge() {
    drawRightFaceEdge();
	/*translate and flip reverse the canvas
    ref: https://www.w3schools.com/tags/canvas_translate.asp
    Ref: https://stackoverflow.com/questions/8168217/html-canvas-how-to-draw-a-flipped-mirrored-image
    */
    ctx.translate(canvasWidth, 0);
    ctx.scale(-1, 1);
}

drawLeftFaceEdge();
drawRightFaceEdge();

ctx.fillStyle = '#ffd200';
ctx.fill();
ctx.stroke();