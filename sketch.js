//Create variables here
var dog,dog1,happyDog,database,foodS,foodStock;

function preload()
{
  dog1=loadImage("images/Dog.png")
  happyDog=loadImage("images/happyDog.png")
}

function setup() {
	createCanvas(1000, 900);
  dog=createSprite(400,400)
  dog.addImage(dog1)
  dog.scale=0.5
  database=firebase.database()
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

}


function draw() {  
  background(46,139,87)
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog)
  }
  fill("black");
  textSize(50)
  text("foodStock",200,100)
  drawSprites();
  //add styles here
}
function readStock(data){
  foodS=data.val()
}
function writeStock(x){
  if (x<=0){
    x=0;
  }else{
    x=x+1;
  }
database.ref('/').update({
  Food:x
})
}


