var DustbinImg, PaperImg
var dustbinSprite, paperSprite
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	//DustbinImg= loadImage("dustbingreen.png")
	//PaperImg= loadImage("paper.png")
}

function setup() {
	createCanvas(1000, 500);
	rectMode(CENTER);

	//paperSprite= createSprite(200, 430, 20,20)
	//paperSprite.addImage(PaperImg)
	//paperSprite.scale=0.3

	//dustbinSprite=createSprite(915,384,50,50)
    //dustbinSprite.addImage(DustbinImg)
    //dustbinSprite.scale=0.35


	engine = Engine.create();
	world = engine.world;

	
	HorizontalBox1 = new GarbageCan(815,438,100,10)
	VerticalBox1 = new GarbageCan(770,400,10,100)
	VerticalBox2 = new GarbageCan(860,380,10,130)
	VerticalBox3 = new GarbageCan(1000,250,15,10000)
    Ground1= new ground(width/2,450,width,15)
    paperObject= new Paper(200,200,20)
	GarbagecanImgNew = new GarbageCanImg(815,438,100,10)
	//Create the Bodies Here.
	Launcher1= new Launcher(paperObject.body,{x:200,y:150})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");

  text("Drag the Paper Ball to the top and shoot", 400, 250)
 // Engine.update(engine)
 
 //dustbinSprite.x= HorizontalBox1.body.position.x
// dustbinSprite.y= HorizontalBox1.body.position.y
  HorizontalBox1.display()
  
  VerticalBox1.display()
  VerticalBox2.display()
  VerticalBox3.display()
  GarbagecanImgNew.display()
  paperObject.display()
  Ground1.display()
  Launcher1.display()
  
  //paperSprite.x=paperObject.body.position.x
// paperSprite.y=paperObject.body.position.y
  drawSprites();
}


function mouseDragged(){

Matter.Body.setPosition(paperObject.body, {x: mouseX, y: mouseY})

}


function mouseReleased(){
Launcher1.fly();


}

	function keyPressed() {
		if (keyCode===UP_ARROW) {
		   Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:33,y:-26});
		   
		 }
	   }