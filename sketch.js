const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rel;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper=new Paper(100,350);
	ground=new Ground(400,670,800,20);
	// dust1=new Dustbin(500,609,20,100);
	// dust2=new Dustbin(700,609,20,100);
	dust=new Dustbin(600,570,180,180);
  lid=new Ground(600,475,195,20);

  rel=createButton("Reload");
  rel.position(300,100);

	Engine.run(engine);
  
}


function draw() {

  rel.mousePressed(()=>{
    location.reload();
  });

  background("lightblue");	
  Engine.update(engine);
  rectMode(CENTER);
  fill("white");	
  paper.display();
  fill("brown");
  ground.display();
  // dust1.display();
  // dust2.display();
  dust.display();
  fill("green");
  lid.display();

  fill("black");
  textSize(15);
  text("x : "+paper.body.position.x,100,100);
}

function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(paper.body,{x:600,y:600});
}
}



