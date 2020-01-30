var canvas = document.getElementById('canvas');

var context = canvas.getContext('2d');

let xPosition = 240;
let yPosition = 280;

let squareX = 5;
let squareY = 5;
let squareW = 10;
let squareH = 15;
let canvasCanonMax = 460;
let canvasCanonMin = 0;
let score = 0;



context.fillStyle = "red";
context.fillRect(squareX, squareY, squareW, squareH);


context.fillStyle = "black";
context.fillRect(xPosition, yPosition, 20, 40);

context.fillStyle = "red";
    context.fillRect(105, 5, 10, 15);




function printScore(){
    context.fillStyle = "blue";
    context.font = "15px Arial";
    context.fillText("Score:" + score, 10, 20);
    
}

window.onload = printScore();




function move(e){
    //RIGHT arrow
    if(e.keyCode==39  || e.keyCode==68){
        xPosition += 10;
        
        //block canon position
        if(xPosition > canvasCanonMax){
       xPosition = canvasCanonMax;
       }
    }
    //LEFT arrow
    if(e.keyCode==37 || e.keyCode==81){
        xPosition -= 10;
        
        //block canon position
        if(xPosition < canvasCanonMin){
       xPosition = canvasCanonMin;
       }
    }
    
    //UP arrow
    if(e.keyCode==38){
        yPosition -= 10;
        
        //block canon position
        if(yPosition < 250){
       yPosition = 250;
       }
    }
    
    //DOWN arrow
     if(e.keyCode==40){
        yPosition += 10;
        
        //block canon position
        if(yPosition > 280){
       yPosition = 280;
       }
    }
    
    
    //SHOOT ESPACE
    if(e.keyCode==32){
     //  shoot();
        drawIt();
        
     //   move();
//        window.requestAnimationFrame(drawIt);
    }
  
    canvas.width = canvas.width;
    //shooter gun
    context.fillStyle = "black";
    context.fillRect(xPosition, yPosition, 20, 40);
    
    //enemy
    context.fillStyle = "red";
    context.fillRect(squareX, squareY, squareW, squareH);
    
    context.fillStyle = "red";
    context.fillRect(105, 5, 10, 15);
    printScore();
    
}
document.onkeydown = move;

 var y = 300;

var bulletSize = 20;
function drawIt() {
    
    window.requestAnimationFrame(drawIt); 
    context.clearRect(0,0,canvas.width,canvas.height); //clear rect  behind only ||clear before drawing it again
    
//    context.clearRect(xPosition,y,bulletSize,bulletSize);

    context.fillStyle = "black"; 
    context.fillRect(xPosition,y,bulletSize,bulletSize); 
    y-=4; 
   
}


function shoot(){
      
//    var img = document.getElementById("bullet");
//    context.drawImage(img, 10, 10);
   
    
    var imgPath = './téléchargement.png';

//Create a new Image object.
var imgObj = new Image();
 
//Set the src of this Image object.
imgObj.src = imgPath;

//the x coordinates
var bulletX = 228;
//the y coordinates
var bulletY = 240;
// i = '';
//for (i = 240; i > 0; i--) {
//    bulletY = i;
//    imgObj.onload = function(){
//    //Draw the image onto the canvas.
//    context.drawImage(imgObj , bulletX, bulletY , imgObj.width*0.2, imgObj.height * 0.2);
//    
//    
//} 
//}
    
 
//When our image has loaded.
imgObj.onload = function(){
    //Draw the image onto the canvas.
    context.drawImage(imgObj , bulletX, bulletY , imgObj.width*0.2, imgObj.height * 0.2);
    
    
}  
}


//-------working function to shoot square---
//var y = 80; 
//function drawIt() { 
//    window.requestAnimationFrame(drawIt); 
//    
//    context.clearRect(0,0,canvas.width,canvas.height); 
//    context.fillStyle = "black"; 
//    context.fillRect(50,y,10,10); 
//    y-=4; 
//} 
//-------------




//function to shoot bullet---------
//var imgPath = './téléchargement.png';
//
//function myfunction(){
//var element = imgPath;
//var left = 0;   
//
//var animateCallback = function() {
//	element.style.marginTop = (--left) + 'px';
//
//  // clear interval after 200 frame is moved
//  if (left == 100) {
//    clearInterval(interval);
//  }
//}
//
//var interval = setInterval(animateCallback, (1000 / 60));
//}
//function move(e){
//    if(e.keyCode==32){
//        myfunction();
//    }}
//------------



















//function myfunction(){
//var element = document.getElementById('box');
//var left = 0;   
//
//var animateCallback = function() {
//	element.style.marginTop = (--left) + 'px';
//
//  // clear interval after 60 frame is moved
//  if (left == 200) {
//    clearInterval(interval);
//  }
//}
//
//var interval = setInterval(animateCallback, (1000 / 60));
//}
//function move(e){
//    if(e.keyCode==32){
//        myfunction();
//    }}



