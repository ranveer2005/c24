const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, object,box1,box2,box3,box4,box5,ground,pig1,pig2,log2,log1,log3,log4;

function setup() {

  createCanvas(1250,550);
  engine = Engine.create();
  world = engine.world;

  box1 = new Box(920,514,70,70);
  box2 = new Box(1080,514,70,70);
  box3 = new Box(920,414.5,70,70)
  box4 = new Box(1080,414.5,70,70)
  box5 = new Box(990,334.5,70,70)
  ground = new Ground(625,540,1250,20)
  pig1 = new Pig(1000,515)
  pig2 = new Pig(1000,415)
  log1 = new Log(1000,445,230,PI/2)
  log2 = new Log(996.5,374.5,230,PI/2)
  log3 = new Log(915,334.5,230,PI/2)
  log4 = new Log(1085,334.5,230,PI/2)  
}

function draw() {
  background(0);  
  Engine.update(engine);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  ground.display();
  pig1.display();
  pig2.display();
  log1.display();
  log2.display();
  log3.display();
  log4.display();
}