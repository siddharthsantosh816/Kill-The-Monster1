const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var hero;
var ground;
var block=[];
var fly;
var monster;


function preload(){
    bImg = loadImage("sprites/background.png");
  }

function setup() {
	createCanvas(1200, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
		
	//Create the Bodies Here.
	ground1=new Ground(320,450,720,10);
	hero=new Hero(160,200,150);
	monster=new Monster(660,150,85)
	
	fly = new Fly(hero.body,{x:160,y:150});
	for(var b=0;b<7;b++){
		block.push(new Block(380,430-b*30,30,30));
	}

	for(var b=0;b<6;b++){
		block.push(new Block(430,430-b*30,30,30));
	}
	for(var b=0;b<8;b++){
		block.push(new Block(480,430-b*30,30,30));
	}
	for(var b=0;b<5;b++){
		block.push(new Block(530,430-b*30,30,30));
	}
	Engine.run(engine);
}
	
function draw() {
	background(bImg);
	ground1.display();
	hero.display();
	fly.display();
	monster.display();
	
	for(var d=0;d<block.length;d++){
		fill("red");
		block[d].display();
	}
		
  }
  function mouseDragged(){
		Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
  }