"use strict";

drawline();

function drawline() {
let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");


context.beginPath();
context.fillStyle = "GREEN" ;
context.rect(50,50,90,200);
context.fill();

context.beginPath();
context.fillStyle = "GREEN" ;
context.rect(100,50,400,90);
context.fill();

context.beginPath();
context.fillStyle = "GREEN" ;
context.rect(450,50,90,200);
context.fill();

context.beginPath();
context.fillStyle = "GREEN" ;
context.rect(140,250,310,310);
context.fill();


context.beginPath();
context.fillStyle = "WHITE" ;
context.rect(240,350,100,100);
context.fill();
   

}

