let canvas = document.getElementById("gameCanvas");
let context = canvas.getContext("2d");

// draws a white rectangle
context.beginPath();
context.rect(50, 50, 100, 100);
context.fillStyle = "#ffffff";
context.fill();
context.closePath();

// draws a white circle
context.beginPath();
context.arc(200, 200, 10, 0, Math.PI * 2);
context.fillStyle = "#ffffff";
context.fill();
context.closePath();

// draws blue arial text
context.font = "32px arial";
context.fillStyle = "#0000ff";
context.fillText("Text", 300, 300);