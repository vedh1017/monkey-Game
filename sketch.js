var ground;
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score=0;
var survivalTime=0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 600);
  
  foodGroup= new Group();
  obstacleGroup= new Group();
  monkey = createSprite (50, 450, 50, 10);
monkey.addAnimation("running",monkey_running);
  monkey.scale=0.2;
  
  ground= createSprite(50, 520,1100,10);
  ground.shapeColor= "grey";
  ground.velocityX= -20;
  
}


function draw() {
background(0);
  
  if(keyDown("space")&& monkey.y >= 100){
     monkey.velocityY=-10
    }
  monkey.velocityY = monkey.velocityY + 0.8
    monkey.collide(ground);
    ground.x= ground.width/2
  
  
  if (frameRate/100){
    score= score+1;
    
  }
  
  stroke("red");
  textSize(20);
  fill("red");
  text("score:"+ score, 500, 50);
  
  stroke("blue");
  textSize(20);
  fill("blue");
  survivalTime= Math.ceil(frameCount/frameRate());
  text("SurvivalTime:"+ survivalTime, 100, 50);
  
    spawnFood();
    spawnObstacles();
    drawSprites();
}


function spawnFood(){
  if (frameCount%80===0){
    banana= createSprite(500, random(120,200), 30, 10)
    banana.addImage(bananaImage);
    banana.scale= 0.1;
    banana.velocityX=-7;
    banana.lifetime=100;
    foodGroup.add(banana);
  }
}
  function spawnObstacles(){
      if (frameCount%300===0){
    obstacle= createSprite(500, 480, 30, 10)
    obstacle.addImage(obstacleImage);
    obstacle.scale= 0.3;
    obstacle.velocityX=-5;
    obstacle.lifetime=100;
    obstacleGroup.add(obstacle);
      }
      
      
    
  
  
  
  
}





