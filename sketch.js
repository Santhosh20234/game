/*const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;*/
var background_image, background;
var snake, snakeImage;
var gameState = "PLAY"
var apple, appleImg;
function preload(){
 appleImg = loadImage("./assets/apple.png")
}

function setup()
{
  createCanvas(800, 800);
  background_image = loadImage("./assets/snakeBackground.webp")
  snake = createSprite(100, 100, 20, 20)
  edges = createEdgeSprites()

  //Math.floor(Math.random() * (max - min) + min);
  apple = createSprite( Math.round(Math.random() * (600 - 200) + 200), Math.round(Math.random() * (600 - 200) + 200))
  apple.addImage(appleImg)
  apple.scale = 0.1
  
}

function draw() 
{
  background(background_image);
  
  
  
  if(gameState === "PLAY"){
    snakeControl()
  }
 
  if(snake.isTouching(edges)){
    gameState = "END"
    snake.setSpeedAndDirection(0, 0)
  }
  
  snake.collide(edges)
 drawSprites()
}

function snakeControl(){
  
if(keyDown("RIGHT_ARROW")){

  snake.setSpeedAndDirection(2, 0)
}

if(keyDown("LEFT_ARROW")){

  snake.setSpeedAndDirection(-2, 0)
}

if(keyDown("UP_ARROW")){

  snake.setSpeedAndDirection(-2, 90)
}

if(keyDown("DOWN_ARROW")){

  snake.setSpeedAndDirection(2, 90)
}

}