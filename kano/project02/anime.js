"use strict";
// 宣言
var playerObj;
var enemySprite, enemyImg, enemyAnime;

let player = {
    x: 300, 
    y: 250, 
    jump: false,
    grav: 0
};

// キーボード入力
addEventListener( "keydown", keydownfunc );

//アニメ定義
function preload() {
    // 複数の連番画像を読み込む
    playerObj = loadAnimation('img/bubbly0001.png','img/bubbly0004.png');  

    // 複数の画像が１枚になったファイルを読み込む,幅,高さ,画像数
    enemyImg = loadSpriteSheet('img/player_spritesheet.png', 70.5, 94, 6); 
    enemyAnime = loadAnimation(enemyImg);  // 複数の連番画像を読み込む
}


//キャンバス：最初の1回だけ実行
function setup(){
    createCanvas(800, 400).parent('キャンバスの位置');  // WebGLモードでキャンバスを作成（Graphic Libraly）
    frameRate(32);
    noSmooth();
    enemySprite = createSprite(100,100);  // 表示する場所 x, y
    enemySprite.addAnimation('run', enemyAnime);    // 画像ファイルを割り当て
}
 
//キャンバス：ずーっと↓ここを繰り返す
function draw(){
    let p = player;                 // 変数が長いので短縮する
    background("#555555");          // 背景の色：常に上書きして前のフレームを消す
    animation(playerObj, p.x, p.y + p.grav );    // アニメしながら表示 アニメオブジェクト, x, y
    drawSprites();                  // スプライトを描画する

    if( p.jump == true ) {                        // ジャンプ中ならば、スクリプトを実行
        p.grav += 1;                              // ジャンプ加速度を減らす
        if( p.grav > 18 ) p.jump = false;         // ジャンプ着地したらリセット
        p.y += p.grav;                            // 高さ = Y座標 + ジャンプ加速度
    }
}

// キー操作
function keydownfunc(event) {
    var key_code = event.keyCode;
    if( key_code === 37 ) player.x -= 8; //左
    if( key_code === 38 ) player.y -= 8; //上
    if( key_code === 39 ) player.x += 8; //右
    if( key_code === 40 ) player.y += 8; //下
    if( key_code === 32 ) { player.jump = true; player.grav = -20; } //スペースキー

}