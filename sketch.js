
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5;
var roof;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof=new Roof(400,100,750,60);

	bob1=new Bob(30,400);
	bob2=new Bob(180,400);
	bob3=new Bob(330,400);
	bob4=new Bob(480,400);
	bob5=new Bob(745,400);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  drawSprites();
 
}



