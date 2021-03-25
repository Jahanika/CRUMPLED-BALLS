
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,650,800,10)
	paperObject = new PaperClass(200,500,30)
	
	dustbin1=new DustbinClass(600,640,100,10)
	dustbin2=new DustbinClass(550,600,10,100)
	dustbin3=new DustbinClass(650,600,10,100)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("aqua");
  
  ground.display();
 
  dustbin1.display();
  paperObject.display()
//   dustbin2.display();
//   dustbin3.display();
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:100,y:-100})
	}
}



