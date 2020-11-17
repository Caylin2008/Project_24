
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000,1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	paper1 = new Paper(10,500,20);
	
	log1 = new log(900,900,200,20);
	log2 = new log(990,860,20,100);
	log3 = new log(810,860,20,100);

	ground1 = new Ground(500,925,1000,25);

	Engine.run(engine);
  
}


function draw() {
  background(0);

  paper1.display();
  log1.display();
  log2.display();
  log3.display();
  ground1.display();


  keyPressed();
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:1,y:-4});

	}
}



