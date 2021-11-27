"use strict";
// 宣言
let angle = 0;

//キャンバス：最初の1回だけ実行
function setup(){
    createCanvas(800, 400, WEBGL).parent('キャンバスの位置');  // WebGLモードでキャンバスを作成（Graphic Libraly）
    angleMode(DEGREES);             // 角度（ラジアンでなく、角度°）
    debugMode();                    // デバッグモード（地平線や角度の起点を表示する！！）
    normalMaterial();               // デバッグ向けマテリアル
}
 

//キャンバス：ずーっと↓ここを繰り返す
function draw(){
    background("#883333");          // 背景の色：常に上書きして前のフレームを消す
    orbitControl();                 // オービット制御（ぐりぐり）

    rotateX(angle);
    rotateY(angle);
    rotateZ(angle);

    // 座標を設定してから立体を描くこと
    box(50, 60, 200 ); // box( 幅, 高さ, 奥行き, ?, ? ) ?はサブディビジョン数4以下
    sphere(50);
    cone(90,20,25);

    angle += 1;
}