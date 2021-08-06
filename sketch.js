var tommo,tommoImg,tommoImg2,tommo3;
var jerry,jerryImg;


function preload() {
    //load the images here
    tommoImg =  loadAnimation ("images/cat1.png");
    jerryImg = loadAnimation ("images/mouse2.png","images/mouse3.png");
    tommoImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    tommo3 = loadAnimation("images/cat4.png",);
    jerry = loadAnimation("images/mouse1.png");
    jerryImg2 = loadAnimation("images/mouse4.png");    
    bg = loadImage("images/garden.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tommo = createSprite(870,600);
    tommo.addAnimation("tommoSlepping",tommoImg);
    tommo.scale = 0.2 ;   
    jerry = createSprite(200,600);
    jerry.addAnimation("jerrystading",jerryImg);
    jerry.scale = 0.2;
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(){
        
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
