var dog,happyDog,database,foodS,foodStock

function preload()
{
 dogImg=loadImage("images/dogImg.png");
 happyDogImg=loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  database=firebase.database();
  foodStock=database.ref("food");
  foodStock.on("value",readStock);
  

  dog=createSprite(250,350,10,60);
  dog.addImage(dogImg);
  dog.scale=0.2;
}


function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogImg);
  }




  drawSprites();

  textSize(25);
  fill("green");
  stroke("blue");

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  database.ref('/').update({
    food:x

  });

}


