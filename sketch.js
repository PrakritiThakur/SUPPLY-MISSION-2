
//declaring variables
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground

//constants 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	//loading images
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");

}

function setup() {

	//setting canvas
	createCanvas(800, 700);

	//setting rectMode as CENTER
	rectMode(CENTER);
	
    //creating package sprite and adding image to it
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2;

	//creating helicopter sprite and adding image to it
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	//creating ground sprite
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

    //making use of physics engine
	engine = Engine.create();
	world = engine.world;

	//making packageBody
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.09 , isStatic:true});
	//adding packageBody to World
	World.add(world, packageBody);
	
	//creating red box
	var box1= createSprite(400,650,200,20);
	box1.shapeColor="red";
	var box2= createSprite(290,610,20,100);
	box2.shapeColor="red";
	var box3=createSprite(500,610,20,100);
	box3.shapeColor="red";
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 
	//adding ground, packageSprite and packageBody to World
	World.add(world, ground);
	World.add(world,packageSprite);
	World.add(world,helicopterSprite);

	//running physicsEngine
	Engine.run(engine);
  
}


function draw() {

  //setting background as back
  background(0);

  //setting x and y position of packageSprite according to packageBody
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;

  //calling function keyPressed
  keyPressed();

  //drawing sprites
  drawSprites();
  
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    //making the packageBody fall
	Matter.Body.setStatic(packageBody,false);
    
  }
}



