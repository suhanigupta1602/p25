const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinObj, paperObject,groundObject;
var side1, side2, side3; 
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperObject=new Paper(200,450,70);
	groundObject=new Ground(width/2,670,width,20);
	dustbinObj=new Dustbin(1200,630);
	side1= createSprite(1100, 550, 20, 220)
	side2= createSprite(1300, 550, 20, 220)
	side3= createSprite(1200, 649, 220, 25)

	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  side1.display();
  side2.display();
  paperObject.display();
  groundObject.display();
  dustbinObj.display();
  side3.display();
  
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});

    
  	}
}

