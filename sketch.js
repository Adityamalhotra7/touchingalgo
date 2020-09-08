var movingrect,fixedrect;
var gameobject1,gameobject2,gameobject3,gameobject4;
function setup() {
  createCanvas(1200,800);
 movingrect=createSprite(800, 400, 80, 30);
fixedrect=createSprite(600,400,50,80);
movingrect.velocityX=3;
fixedrect.velocityX=-3;
movingrect.shapeColor="blue";
fixedrect.shapeColor="blue";
gameobject1=createSprite(100,100,50,50);
gameobject1.shapeColor="green";
gameobject2=createSprite(200,100,50,50);
gameobject2.shapeColor="green";
gameobject3=createSprite(300,100,50,50);
gameobject3.shapeColor="green";
gameobject4=createSprite(400,100,50,50);
gameobject4.shapeColor="green";
}

function draw() {
  background(255,255,255);  
  // movingrect.x=World.mouseX;
  // movingrect.y=World.mouseY;
  // if(isTouching(movingrect,gameobject1)){
  //   movingrect.shapeColor="orange";
  //   gameobject1.shapeColor="orange";
  // }
  // else{
  //   movingrect.shapeColor="blue";
  //   gameobject1.shapeColor="blue";
  // }
bounceOff(movingrect,fixedrect);
  drawSprites();
}

function isTouching(object1,object2){
  if(object1.x-object2.x <= object1.width/2 + object2.width/2 
    && object2.x-object1.x <= object1.width/2 + object2.width/2
    && object1.y-object2.y <= object1.height/2 + object2.height/2
      && object2.y-object1.y <= object1.height/2 + object2.height/2){
      return true;
       }
       else{
         return false;  
          }
}
function bounceOff(object1,object2){
  if(object1.x-object2.x <= object1.width/2 + object2.width/2 
    && object2.x-object1.x <= object1.width/2 + object2.width/2
     ){
      movingrect.velocityX=movingrect.velocityX *(-1);
    fixedrect.velocityX=fixedrect.velocityX *(-1);
         }
       if(object1.y-object2.y <= object1.height/2 + object2.height/2
        && object2.y-object1.y <= object1.height/2 + object2.height/2){
          movingrect.velocityY=movingrect.velocityY *(-1);
          fixedrect.velocityY=fixedrect.velocityY *(-1);
       }
}