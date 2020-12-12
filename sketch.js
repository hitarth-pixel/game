var monkey;
var player;
var monkey1,monkey2,monkey3,monkey4,monkey5,monkey6,monkey7,monkey8,monkey9,monkey10;

var banana1;
var foodGroup;

var score=0;

var jungle;
var jungle1;

var stone1;

var obstacleGroup;

var invisibleGround;

function preload(){
  
banana1=loadImage("banana.png");
  
jungle1=loadImage("jungle.jpg");
  
stone1=loadImage("stone.png");
  
player=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");

}

function setup() {
  createCanvas(400, 400);
  
  
  jungle=createSprite(200,200,100,100);
  jungle.addImage("jungle",jungle1);
  
  
  
  monkey=createSprite(100,325,50,50);
  monkey.addAnimation("monkey",player);
  monkey.scale=0.15;
  
  
  
  foodGroup= new Group();
  obstacleGroup=new Group();
  
  invisibleGround=createSprite(100,370,100,20);
  invisibleGround.visible=false;
 
  
  
}

function draw() {
  background(220);
  jungle.velocityX=-6;
  if (jungle.x < 0){
      jungle.x = jungle.width/2;
    jungle.velocityX = -(6 + 3*score/100);
    }
  
  if(foodGroup.isTouching(monkey)){
     score=score+2;
    monkey.scale=0.2;
     foodGroup.destroyEach();
  }
  
   monkey.collide(invisibleGround);
  
  if(frameCount%300===0){
  rock();}
  
  if(frameCount%60===0){
   spawnFood();
}
  console.log(monkey.y)
  if(keyDown("space") && monkey.y>=280 ) {
      monkey.velocityY = -6;
    }
  
     else {monkey.velocityY = monkey.velocityY + 0.2}
  
  if (obstacleGroup.isTouching(monkey)){
       monkey.scale=0.11
      }
  
  
  
  switch(score){
    case 10:monkey.scale=0.12; 
     break;
     case 20:monkey.scale=0.14; 
     break; 
     case 30:monkey.scale=0.16; 
     break; 
     case 40:monkey.scale=0.18; 
     break;
     default:break;
  }
  
  drawSprites();
  fill("white");
  stroke("green")
  textSize(20);
  text("SCORE="+score,200,380);
  
  
}

function spawnFood(){
 banana=createSprite(350,200,100,100)
banana.addImage(banana1);
banana.y=random(200,100);
banana.scale=0.1 ;
banana.velocityX=-6
banana.lifetime=67;
foodGroup.add(banana); 
}

function rock() {
 stone = createSprite(400,350,80,50);
stone.addAnimation("stone",stone1);
stone.scale=0.18;
stone.velocityX=-4;
stone.lifetime=100;
obstacleGroup.add(stone);
}