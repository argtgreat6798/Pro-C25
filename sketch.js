const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world
var drop1,drop2;
var drop3,drop4;

function setup() {
  var canvas = createCanvas(800,400);
   drop1 = new Drop(100,200,4,10);
   drop2 = new Drop(102,202,4,10);
   drop3 = new Drop(104,204,4,10);
   drop4 = new Drop(106,206,4,10);

}

function draw() {
  background(55,155,25);  
  Engine.update(engine);
  
  drop1.display();
  drop2.display();
  drop3.display();
  drop4.display();

  drawSprites();
}