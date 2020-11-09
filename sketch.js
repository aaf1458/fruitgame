var PLAY = 1;
var END = 0;
var gameState = PLAY;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
 
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)
  monkey=createSprite(80,315,20,20)
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1

  ground=createSprite(400,350,90,10)
  ground.velocityX=-4
  ground.x=ground.width/2
  console.log(ground.x)
  score=0
  
  FoodGroup = createGroup()
  obstacleGroup = createGroup()
}


function draw() {
  background("white")
  
   if(gameState === PLAY){
    spawnobstacle()  
      spawnFood()
      
    if(obstacleGroup.isTouching(monkey)){
        gameState = END;
    }
   } 
   else if (gameState === END) {
  
     
      ground.velocityX = 0;
      monkey.velocityY = 0
     
    
     
      //set lifetime of the game objects so that they are never destroyed
    obstacleGroup.setLifetimeEach(-1);
    FoodGroup.setLifetimeEach(-1);
     
     obstacleGroup.setVelocityXEach(0);
     FoodGroup.setVelocityXEach(0);
   }
  
  
  
  
  
  drawSprites()
var survivalTime=0
  stroke("white")
  text(20)
  fill("white")
  text("score"+score,500,500)
  
  stroke("black")
  textSize(20)
  survivalTime=Math.ceil(frameCount/frameRate())
  text("urvival Time"+survivalTime,100,50)

}

function spawnFood() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
     banana = createSprite(600,100,40,10);
    banana.y = Math.round(random(50,160));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -(3+score/100);
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
   
    
    //adding cloud to the group
   FoodGroup.add(banana);
    }
}
function spawnobstacle(){
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
     obstacle = createSprite(600,100,40,10);
    obstacle.y = 350
    obstacle.addImage(obstacleImage);
    obstacle.scale = random(0.1,0.3)
    obstacle.velocityX = -(3+score/100);
    
     //assign lifetime to the variable
    obstacle.lifetime = 200;
    
   
    
    //adding cloud to the group
   obstacleGroup.add(obstacle);
    }
}



