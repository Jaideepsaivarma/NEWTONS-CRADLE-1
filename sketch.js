
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball1,ball2,ball3,ball4;
var roof;
var jaid;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ball1 = new jaideep(350,280,50);
	roof = new Roof(400,100,400,40);
	jaid = new Chain (ball1.body,roof.body,70*2,0);
	
	
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
	//console.log(mouseX);
	//console.log(mouseY)
  rectMode(CENTER);
  background(0);
  ball1.display();
  roof.display();
  jaid.display();
  
  drawSprites();
 
}



