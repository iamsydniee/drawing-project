var canvasDiv = document.getElementById("drawingArea");
var canvas = canvasDiv.getContext('2d');

//square//
  canvas.fillStyle = "orange";
  canvas.fillRect(550, 475, 100, 100);
  // square 2//
  canvas.fillStyle = "red";
  canvas.fillRect(580, 475, 40, 100);

//Triangle//


//circle//
canvas.beginPath();
canvas.fillStyle = "white";
canvas.arc(600, 400, 90, 0, 2*Math.PI,true);
canvas.stroke();
canvas.fill();
//circle2//
canvas.beginPath();
canvas.fillStyle = "white";
canvas.arc(600, 256, 90, 0, 2*Math.PI,true);
canvas.stroke();
canvas.fill();

//sun//
canvas.beginPath();
canvas.fillStyle = "yellow";
canvas.arc(100, 90, 45, 0, 2*Math.PI,true);
canvas.stroke();
canvas.fill();

//bird//

canvas.fillStyle = "white";
canvas.fillRect(234, 100, 60, 50);

canvas.beginPath();
canvas.moveTo(234,100);
canvas.lineTo(150,100);
canvas.lineTo(100,50);
canvas.fill();

canvas.beginPath();
canvas.moveTo(150,100);
canvas.lineTo(200,125);
canvas.lineTo(150,150);
canvas.fill();

canvas.beginPath();
canvas.moveTo(150,150);
canvas.lineTo(86,200);
canvas.lineTo(100,150);
canvas.fill();

//???//
canvas.beginPath();
canvas.fillStyle = "orange";
canvas.moveTo(700,295);
canvas.lineTo(540,285);
canvas.lineTo(560,345);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "orange";
canvas.moveTo(400,695);
canvas.lineTo(320,285);
canvas.lineTo(560,345);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "orange";
canvas.moveTo(100,295);
canvas.lineTo(340,285);
canvas.lineTo(560,345);
canvas.fill();
