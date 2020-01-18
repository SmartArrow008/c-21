var movingRect;
var gameObject1,gameObject2,gameObject3,gameObject4;
function setup() {
  createCanvas(1200,800);
 gameObject1 = createSprite(100,100,50,50);
 gameObject1.shapeColor = "green";
 gameObject2 = createSprite(300,100,50,50);
 gameObject2.shapeColor = "green";
 gameObject3 = createSprite(500,100,50,50);
 gameObject3.shapeColor = "green";
 gameObject4 = createSprite(700,100,50,50);
 gameObject4.shapeColor = "green";
 movingRect = createSprite(400,200,80,30);
 movingRect.shapeColor = "green";
 movingRect.debug = true;
}

function draw() {
  background(0,0,0); 
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY; 
  if(isTouching(movingRect,gameObject2)===true){
    movingRect.shapeColor = "red";
    gameObject2.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    gameObject2.shapeColor = "green";
  }

  if(isTouching(movingRect,gameObject3)===true){
    movingRect.shapeColor = "red";
    gameObject3.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    gameObject3.shapeColor = "green";
  }

  drawSprites();
}
