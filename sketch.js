
var paperObject
var groundObject
var dustbinObject
var dustbinImage
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload(){
	dustbinImage=loadImage("dustbingreen.png")
}
function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;
paperObject=new paper(200,450,40);
groundObject=new ground(width/2,670,width,20)
dustbinObject=new dustbin(1200,650);


	//Create the Bodies Here


Engine.run(engine)}


function draw() {
  rectMode(CENTER);
  background(255);


 paperObject.display();
 groundObject.display();
 dustbinObject.display();
}
function keyPressed() {
	if (keyCode === UP_ARROW){
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
}
}

