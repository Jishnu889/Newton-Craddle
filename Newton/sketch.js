
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
const Render = Matter.Render
var ground1
var roof1
var bob1
var bob2
var bob3
var bob4
var bob5
var rope1
var rope2
var rope3
var rope4
var rope5
function preload()
{
	
}

function setup() {
	createCanvas(1600, 800);
  rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground1=new Ground(400,775,2500,50)
roof1=new Roof(width/2,height/4,width/7,20)
bobDiameter=40;
startBobPositionX=width/2
startBobPositionY=height/4+500
bob1=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter)
bob2=new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter)
bob3=new Bob(startBobPositionX,startBobPositionY,bobDiameter)
bob4=new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter)
bob5=new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter)
rope1=new Rope(bob1.body,roof1.body,-bobDiameter*2,0)
rope2=new Rope(bob2.body,roof1.body,-bobDiameter*1,0)
rope3=new Rope(bob3.body,roof1.body,0,0)
rope4=new Rope(bob4.body,roof1.body,bobDiameter*1,0)
rope5=new Rope(bob5.body,roof1.body,bobDiameter*2,0)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  //fill("white")
  background("white");
  ground1.display();
  roof1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  fill("black");
    text(mouseX+","+mouseY,mouseX,mouseY)
  drawSprites();
}

function keyPressed()
{
if(keyCode==UP_ARROW)
{
Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45})
}
}

