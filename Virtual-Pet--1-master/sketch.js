var dog, happyDog, database, foodS, foodStock;


function preload()
{
  dogImg = loadImage ("images/dog.png");
  happyDog= loadImage ("images/happydog.png")
}

function setup() {
	createCanvas(500, 500);
  
  dog = createSprite(250, 200, 20, 20)
  dog.scale= 0.25;
dog.addImage (dogImg)

  database = firebase.database();
  foodStock= database.ref('food');
  foodStock.on("value", readStock)
}


function draw() {  
background (46, 139, 87)
  drawSprites();

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS-1);
    dog.addImage (happyDog)
  }

  textSize (30)
  fill("white")
  text(foodS, 50, 250)

}

function readStock(data){
foodS=data.val();
}

function writeStock(x){
  database.ref('/').update({
    food:x
  })
}