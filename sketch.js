
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1;


function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  
ground1 = new Ground(200,380,400,10);

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background("black");
  keyPressed();
  ground1.display();
  drawSprites();
 
}

function keyPressed(){
    if (keyCode===UP_ARROW){
       Matter.Body.applyForce(paperObject.body, paperObject.bodyposition,{x:85,y:-85});
	}

}

