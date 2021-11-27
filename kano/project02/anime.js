"use strict";
// 宣言
var player;
var x=300, y=250, jump = false, grav = 0;

// キーボード入力
addEventListener( "keydown", keydownfunc );

//アニメ定義
function preload() {
    player = loadAnimation('img/bubbly0001.png','img/bubbly0004.png');
}


//キャンバス：最初の1回だけ実行
function setup(){
    createCanvas(800, 400).parent('キャンバスの位置');  // WebGLモードでキャンバスを作成（Graphic Libraly）
}
 

//キャンバス：ずーっと↓ここを繰り返す
function draw(){
    background("#555555");          // 背景の色：常に上書きして前のフレームを消す
    animation(player, x, y + grav );    // アニメしながら表示 アニメオブジェクト, x, y
    if( jump == true ) {
        grav += 1;
        if( grav > 18 ) jump = false;
        y += grav;
    }
}

// キー操作
function keydownfunc(event) {
    var key_code = event.keyCode;
    if( key_code === 37 ) x -= 8; //左
    if( key_code === 38 ) y -= 8; //上
    if( key_code === 39 ) x += 8; //右
    if( key_code === 40 ) y += 8; //下
    if( key_code === 32 ) { jump = true; grav = -20; } //スペースキー

}