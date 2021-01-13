
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var rope1,rope2,rop3,rope4,rope5,ground,bob1,bob2,bob3,bob4,bob5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);
   background("white");

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Roof(400,400,220,20);
	bob1 = new Bob(400,600,22);
	bob2 = new Bob(445,600,22);
	bob3 = new Bob(490,600,22);
	bob4 = new Bob(355,600,22);
	bob5 = new Bob(310,600,22);
	rope1 = new Rope(bob3.body,ground.body,90);
	rope2 = new Rope(bob2.body,ground.body,45);
	rope3 = new Rope(bob1.body,ground.body,0);
	rope4 = new Rope(bob4.body,ground.body,-45);
	rope5 = new Rope(bob5.body,ground.body,-90); 
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  
 Engine.update(engine);

  drawSprites();
  //keyPressed();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  ground.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW){
	Matter.Body.applyForce(bob5.body,bob5.body.position,{x:-20,y:-25})
	}
}


/*const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var rope1,rope2,rop3,rope4,rope5,ground,bob1,bob2,bob3,bob4,bob5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);
   background("white");

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Roof(400,400,220,20);
	bob1 = new Bob(400,600,22);
	bob2 = new Bob(445,600,22);
	bob3 = new Bob(490,600,22);
	bob4 = new Bob(355,600,22);
	bob5 = new Bob(310,600,22);
	rope1 = new Rope(bob3.body,ground.body,90);
	rope2 = new Rope(bob2.body,ground.body,45);
	rope3 = new Rope(bob1.body,ground.body,0);
	rope4 = new Rope(bob4.body,ground.body,-45);
	rope5 = new Rope(bob5.body,ground.body,-90); 
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  drawSprites();
  //keyPressed();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  ground.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW){
	Matter.Body.applyForce(bob5.body,bob5.body.position,{x:-20,y:-25})
	}
}
*/
