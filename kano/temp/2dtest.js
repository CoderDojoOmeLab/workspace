"use strict";

let objSprite = null;
let tempDirectory = "https://coderdojoomelab.github.io/workspace/kano/project02/img/";

// ↓初期設定（１回だけ）画像の読み込み
function preload(){
    objSprite = createSprite();   // スプライトを作る。
}

// ↓最初にかく画面
function setup(){
    createCanvas(800,400).parent('キャンバスの場所');
    frameRate(32);
    noSmooth();
    objSprite.addAnimation('Kano', loadAnimation(
        tempDirectory + "bubbly0001.png",
        tempDirectory + "bubbly0004.png")
    );
        
    objSprite.position = createVector( 100, 100 ); // スプライトのXY初期設定
    objSprite.setSpeed(5, 45); // +Speed, +Angle(方向)
}

// ↓メイン処理（ずうっと）
function draw(){

    if ( keyIsPressed ) {
        if ( key == "ArrowRight" ) objSprite.position.x += 10;
        if ( key == "ArrowLeft"  ) objSprite.position.x -= 10;
        if ( key == "ArrowUp"    ) objSprite.position.y -= 10;
        if ( key == "ArrowDown"  ) objSprite.position.y += 10;
    }

    objSprite.rotation += 5;
    //objSprite.addSpeed();

    background("#888888"); // RGB
    //animation(objSprite, objSprite.position.x, objSprite.position.y);
    drawSprites();
}

