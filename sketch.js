
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mang8,mango9,mango10;
var world,boy;
var rock;
var a;

function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,40,30);
	mango2=new mango(1000,80,30);
	mango3=new mango(1080,140,30);
	mango4=new mango(1050,240,30);
	mango5=new mango(1150,210,30);
	mango6=new mango(1240,180,30);
	mango7=new mango(1180,130,30);
	mango8=new mango(950,240,30);
	mango9=new mango(970,170,30);
	mango10=new mango(860,180,30);

	rock=new stone (170,430,50);
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	a=new rope (rock.body, {x:230,y:430})

	Engine.run(engine);

}

function draw() {

  background(230);
  
  image(boy ,200,340,200,300);

  fill ("black");
  textSize (22);
  text ("Press Space to get an other chance", 100,100);

  treeObj.display();

  rock.display();

  a.display ();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  groundObject.display();

  detectCollision (rock,mango1);
  detectCollision (rock,mango2);
  detectCollision (rock,mango3);
  detectCollision (rock,mango4);
  detectCollision (rock,mango5);
  detectCollision (rock,mango6);
  detectCollision (rock,mango7);
  detectCollision (rock,mango8);
  detectCollision (rock,mango9);
  detectCollision (rock,mango10);

}

function mouseDragged () {

    Matter.Body.setPosition (rock.body, {x:mouseX,y:mouseY} )

}

function mouseReleased () {

    a.fly();

}

function detectCollision (lstone,lmango) {

	stoneBodyPosition=lstone.body.position;
	mangoBodyPosition=lmango.body.position;

	var distance = dist (stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);

	if (distance<= lmango.r + lstone.r ) {

		Matter.Body.setStatic (lmango.body, false);

	}

}

function keyPressed () {

	if (keyCode===32) {

		Matter.Body.setPosition (rock.body, {x:230,y:430});
		a.attach (rock.body);

	}

}
