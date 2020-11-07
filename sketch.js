const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var ground;
var ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var option={
    isStatic:true
  }
  ground = Bodies.rectangle(200,380,400,20,option);
  World.add(world,ground);
  console.log(ground);
  console.log(ground.position.x);
  console.log(ground.position.y);
  var ball_option={
    restitution:0.5
  }
  ball = Bodies.circle(200,200,30,ball_option);
  World.add(world,ball);
}

function draw() {
  background(50,200,0);
  Engine.update(engine);
  rectMode(CENTER);
  fill("brown");
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  fill("blue");
  ellipse(ball.position.x,ball.position.y,30,30);
  drawSprites();
}