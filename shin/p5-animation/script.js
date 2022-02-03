"use strict"; 

var objSprite = null;
var objSpriteAnime = null;


function preload() {
    var tempKano = "https://coderdojoomelab.github.io/workspace/kano/project02/"
    objSprite = createSprite();
    objSpriteAnime = loadAnimation(tempKano + "img/bubbly0001.png", tempKano + "img/bubbly0004.png");
    
    

}


function setup() {
    createCanvas(500, 300).parent("canvas");
    frameRate(32);
    noSmooth();

    objSprite.addAnimation("anime1", objSpriteAnime);
    print(objSprite);
    objSprite.position = createVector(width/2, height/2);
    objSprite.setSpeed(10, 0);
}

//main loop
function draw() {
    background("#888888");

    //check for key input
    if (keyIsPressed) {
        //move player rectangle according to key input during the rect stays in the canvas
        if (key == "ArrowRight") objSprite.position.x += 10;
        if (key == "ArrowLeft") objSprite.position.x -= 10;
        if (key == "ArrowUp") objSprite.position.x -= 10;
        if (key == "ArrowDown") objSprite.position.x += 10;
        }
    }


    drawSprites();



}
