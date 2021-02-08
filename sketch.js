var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;
	fairy.setCollider("rectangle" , 520 ,-40 ,150,150)


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	
	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 650 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);
	

}


function draw() {
  background(bgImg);

  Engine.update(engine);

  star.x = starBody.position.x
  star.x = starBody.position.y

  if(keyDown("left"))
  {
	  fairy.x = fairy.x + -10
  }

  if(keyDown("right"))
  {
	  fairy.x = fairy.x + 10
  }  

  if(keyDown("down"))
  {
	star.velocityY = 5	
  }


  if(star.isTouching(fairy))
  {
	star.velocityY =  0
  }


  drawSprites();

}


