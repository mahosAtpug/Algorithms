var movingRect,fixedRect;



function setup() {
  createCanvas(800,400);
  movingRect=createSprite(200,100,100,100);
  fixedRect=createSprite(100,100,100,100);
}

function draw() {
  background("yellow");  
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  if (movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2&&
    fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2&&movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2&&
    fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
    movingRect.shapeColor="red";
    fixedRect.shapeColor="blue";
  }
  else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="black";

  }
  drawSprites();
}