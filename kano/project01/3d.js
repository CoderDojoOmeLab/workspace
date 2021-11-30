"use strict";
// 宣言
let angle = 0;
let player = {
    x: 0, 
    y: 0, 
    jump: false,
    z: 0,
    grav: 0
};

// キーボード入力の機能を追加
addEventListener( "keydown", keydownfunc );

//キャンバス：最初の1回だけ実行
function setup(){
    createCanvas(800, 400, WEBGL).parent('キャンバスの位置');  // WebGLモードでキャンバスを作成（Graphic Libraly）
    angleMode(DEGREES);             // 角度（ラジアンでなく、角度°）
    debugMode();                    // デバッグモード（地平線や角度の起点を表示する！！）
    normalMaterial();               // デバッグ向けマテリアル
    createCamera().camera(100, -100, 360, 0, 0, 0, 0, 1, 0);
}
 

//キャンバス：ずーっと↓ここを繰り返す
function draw(){
    background("#883333");          // 背景の色：常に上書きして前のフレームを消す
    orbitControl();                 // オービット制御（ぐりぐり）

    //rotateX(angle);
    rotateY(angle);
    //rotateZ(angle);
    translate( player.x, player.y, player.z );

    // 座標を設定してから立体を描くこと
    box(50, 60, 200 ); // box( 幅, 高さ, 奥行き, ?, ? ) ?はサブディビジョン数4以下
    sphere(50);
    cone(90,20,25);

    //angle += 1;

    if( player.jump == true ) {                        // ジャンプ中ならば、スクリプトを実行
        player.grav += 1;                              // ジャンプ加速度を減らす
        if( player.grav > 18 ) player.jump = false;         // ジャンプ着地したらリセット
        player.y += player.grav;                            // 高さ = Y座標 + ジャンプ加速度
    }

}

// キー操作
function keydownfunc(event) {
    var key_code = event.keyCode;
    if( key_code === 88 ) angle -= 8; //x
    if( key_code === 90 ) angle += 8; //z
    if( key_code === 37 ) player.x -= 8; //左
    if( key_code === 38 ) player.z -= 8; //上
    if( key_code === 39 ) player.x += 8; //右
    if( key_code === 40 ) player.z += 8; //下
    if( key_code === 32 ) { player.jump = true; player.grav = -20; } //スペースキー
}