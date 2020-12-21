
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	groundSprite=createSprite(width/2, height-30, width,10);
	groundSprite.shapeColor= "brown";
	
	
	ground = Bodies.rectangle(width/2, 670, width, 10 , {isStatic:true} );
	World.add(world, ground);


	box1=new dustbin(900,620,20,100);
	box2=new dustbin(1010,660,200,20);
	box3=new dustbin(1100,620,20,100);
	paper1=new Paper(100,640,50);

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220);
  box1.display();
  box2.display();
  box3.display();
  paper1.display();

  
  
  drawSprites();
 
}

function keyPressed(){
if(keyCode===UP_ARROW){
Matter.Body.applyForce(paper1.body,paper1.body.position,{x:125,y:-125})
}
}



