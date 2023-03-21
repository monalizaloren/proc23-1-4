const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    //Defina a 'restitution' para 0.95
    ???,
    //Defina a 'frictionAir' para 0.0'
    ???
  }
   
   var ground_options ={
    //Defina que 'isStatic' recebe 'true'
    //isStatic define o chão como estático
     isStatic: ???
   };
  
  ground = Bodies.rectangle(100,400,400,20,ground_options);
  //Utilize 'World.add' para adicionar o chão ao mundo
 ???(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  //Coloque o código que adiciona a bola ao mundo
  ???(world,ball);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,500,20);
  
}

