
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bg_img;
var zombie_run;
var tower;
var player;

function preload(){
bg_img = loadImage("bg_img2.jpeg")
towerImage = loadImage("tower.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  engine = Engine.create();
  world = engine.world;
  
  player = new Player(285, 153, 50, 180);
}


function draw() 
{
  background(bg_img);
  
  Engine.update(engine);
 

  push();
  translate();
  rotate();
  imageMode(CENTER);
  image(towerImage, 200,520, 200, 500);
  pop();

  drawSprites();

}

