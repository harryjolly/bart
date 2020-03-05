/* Draw Eyes */

// this is the function for creating a circle
function makeArc(a, b, c, d, fill = "") {
  ctx.beginPath();
  ctx.arc(a, b, c, d, 2 * Math.PI);
  ctx.fillStyle = fill;
  ctx.fill();
  ctx.closePath();
  ctx.lineWidth = 5;
  ctx.stroke();
};

// this is the function for creating a unfinished circle
function makeArc2(a, b, c, d, fill = "") {
  ctx.beginPath();
  ctx.arc(a, b, c, d, 2 * Math.PI);
  ctx.fillStyle = fill;
  ctx.fill();
  ctx.lineWidth = 4;
  ctx.stroke();
};

//this is the function for creating a semi circle
function semicircle(a, b, c, d, fill = "") {
  ctx.beginPath();
  ctx.arc(a, b, c, d, Math.PI, false);
  ctx.lineWidth = 4;
  ctx.fillStyle = fill;
  ctx.fill();
  ctx.stroke();
}

// function to create a curved lineTo
// I chose to use quadraticCurveTo instead of bezierCurveTo as there is
// only one control point so it is easier for what I am intend to use the
// function for

function curvedline(x, y, a, b, c, d) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.quadraticCurveTo(a, b, c, d);
  ctx.stroke();

}

// left eye
makeArc(285, 355, 65, 0, "white");
makeArc(288, 355, 10, 0, "black");

//left dimple
// I orginally used a unfinished circle function to create a dimple
// but I found using a curved line was more effiecent
// makeArc2(258, 505, 40, 5.7, "#ffd200") ;

// nose
// nose is positioned in the middle of both eyes so it overlaps
// one eye
semicircle(202, 405, 40, 5.2, "#ffd200");

// right eye
// eye is positioned lower so the eye is overlapping
makeArc(115, 355, 65, 0, "white");
makeArc(112, 355, 10, 0, "black");


//smile
// number 1 and 2 are starting position of line (x,y)
// number 3 and 4position of control point to curve the line (x,y)
// number 5 and 6 are final position of line position (x,y)
curvedline(302, 485, 200, 540, 98, 485);

// left dimple
curvedline(300, 500, 310, 480, 300, 470);

// right dimple
curvedline(100, 500, 90, 480, 100, 470);
