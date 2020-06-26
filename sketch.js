 var ball,ball2,img,paddle;
var song;
var score;
var specter;

function preload() {
  ballimg = loadImage('ball.png');
  paddleimg=loadImage("paddle.png");
  ball2img=loadImage("ball-1.png");
  
  //song=loadSound("s.mp3");
}
function setup() {
  createCanvas(400, 400);
 // song.play();
  ball=createSprite(200,200,20,20);
  ball.addImage (ballimg); 
  
  paddle=createSprite(350,200,20,100);
  paddle.addImage(paddleimg);
  
  
  song=loadSound("Faded.mp3");
    score = 0;
  }


function playit(){

}
function draw() {
  background(205,153,0);
  if (frameCount%25 === 0){
   score = score+1;
    
  }
  
  
  
  edges=createEdgeSprites();
  //Bounce Off the Left Edge only
  ball.bounceOff(edges[0]); 
  
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(paddle,explosion);
  paddle.collide(edges);
  
  if(keyDown("space")){
    ball.velocityX=9; 
    song.play();
  }
  if(keyDown(UP_ARROW))
  {
    paddle.y=paddle.y-20;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.y=paddle.y+20;
  }
  
  
  
  
   
if(ball.x>430){
  
  score = 0;
  ball.velocityY=0;
  ball.velocityX=0;
  song.stop();
  textSize(30);
  fill("white");
  text("Game Over",140,200);
        
  }
  
  if(score>25){
   background(120,50,90); 
    ball.addImage(ball2img);
    song.stop();
  }
  
  
  drawSprites();
  text("score: "+score,340,30);
  
}

function explosion()
{
  ball.velocityY=random(-8,8);
}

