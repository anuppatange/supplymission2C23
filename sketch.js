var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	areaSide1= createSprite(width/2,650,200,20,{isStatic:true});
	areaSide1.shapeColor=color("red")

	areaSide2=createSprite(290,620,20,100,{isStatic:true});
	areaSide2.shapeColor=color("red")

	areaSide3=createSprite(510,620,20,100,{isStatic:true});
	areaSide3.shapeColor=color("red")


	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(10, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	helicopterSprite.velocityX = 2.5;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6,density:1.0,friction:0.1, isStatic:true});
	World.add(world, packageBody);
	//packageBody.velocityX = 1;

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  packageSprite.x = helicopterSprite.x
  packageSprite.collide(areaSide1);

  textSize(20);
  text ("press down arrow to drop the package ",200,350)
  textSize(15);
  text("@AnupCreation",20,100);
  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    helicopterSprite.velocityX =0;
  }
}

