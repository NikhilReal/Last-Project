
var ground,groundimg,bg,coin_img;


function preload(){
  bgimg=loadImage("background.jpg")
  coin_img=loadAnimation("coin1.gif","coin2.gif","coin3.gif","coin4.gif","coin5.gif","coin6.gif","coin7.gif","coin8.gif","coin9.gif")
}


function setup() {
  createCanvas(displayWidth,displayHeight);
 bg=createSprite(600,600)
 bg.addImage(bgimg)
 bg.scale=3
}




function draw() {
  background("white");
  spawnCoins();  
  drawSprites();
}

function spawnCoins(){
if(frameCount%160===0){
  var coin=createSprite(1500,300,10,10)
  coin.addAnimation("moving",coin_img)
  coin.y=Math.round(random(300,550))
  coin.velocityX=-3
  coin.scale=0.5
}


}