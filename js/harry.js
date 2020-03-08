var context = document.getElementById("canvas")
var ctx = context.getContext("2d")

//to do eyes

function makeArc(a, b, c, d, fill = "") {
  ctx.beginPath();
  ctx.arc(a, b, c, d, 2 * Math.PI);
  ctx.fillStyle = fill;
  ctx.fill();
  ctx.closePath();
  ctx.lineWidth = 5;
  ctx.stroke();
};

// to do nose

// to do smile 

// to do dimples 

// left eye
makeArc(285, 355, 65, 0, "white");
makeArc(288, 355, 10, 0, "black");

// right eye
// eye is positioned lower so the nose is overlapping
makeArc(115, 355, 65, 0, "white");
makeArc(112, 355, 10, 0, "black");
