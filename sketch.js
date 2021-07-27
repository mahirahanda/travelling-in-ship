var shipImg,ship;
var sea,seaImg;

function preload() {
  seaImg= loadImage("sea.png");
 shipImg= loadAnimation("ship-1.png", "ship-2.png","ship-3.png","ship-4.png") ;
 


}
function setup() {
  createCanvas(600,500);
  //creating ship
  sea=createSprite(600,300);
  sea.addImage("sea",seaImg);
  sea.velocityX=-1;
  sea.scale=0.5;
    ship=createSprite(50,400,20,50);
    ship.addAnimation("ship",shipImg);
    edges = createEdgeSprites();
    ship.scale=0.25;
    ship.x=90;
    ship.y=400;
    //creating the sea
 
 // adding scale and position to the ship
 
}
function draw(){
background("white");
if(keyDown("enter")){
  ship.velocityX = 2;
}
if(keyDown("left")){
  ship.velocityX= -2;
}
if(keyDown("space")){
  ship.velocityX= 0;
}
if(keyDown("right")){
  ship.velocityX= +2;
}
if (sea.x < 0){
  sea.x=sea.width/2;
}
   
    ship.collide(edges[3])
drawSprites();
}