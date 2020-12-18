
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var ground;
var dust1;
var dust2;
var dust3;
var dustbinSprite;
var dustI;
function preload()
{
	dustI = loadImage("dustbinImage.png");
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
    ground = new Ground (400,600,800,10);
	  paper = new PaperClass (100,300,20,20);
	  dust1 = new Dustbin(600,595,150,20);
	  dust2 = new Dustbin(535,530,20,150);
    dust3 = new Dustbin(665,530,20,150);

    dustbinSprite = createSprite(600,518,2,2);
    dustbinSprite.addImage(dustI);
    dustbinSprite.scale=0.586;
        
}


function draw() {
  rectMode(CENTER);
  background(225);
  
  
 fill("red");
 stroke("red");
 textSize(25);
  text("Press up arrow key to throw and Press Ctrl+R to play again",50,50);
  
  ground.display();
  paper.display();
  dust1.display();
  dust2.display();
  dust3.display();
  keypressed();
  drawSprites();
}
function keypressed(){
	if (keyCode === UP_ARROW && paper.body.position.x<260){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:2,y:-5.5});
	    
	}
}