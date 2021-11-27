//最初の1回だけ実行
function setup(){
    createCanvas(800,400);     // キャンバスのサイズ
    background('#000033');     // 背景の色(0;黒 #RRGGBB)
}
 
//ずーっと↓ここを繰り返す
function draw(){
    // マウスの場所にサークルをずーーっと描画する↓
    if (mouseIsPressed) { 
        fill('#00EE00');    // マウスを押したときの色
    } else { 
        fill('#ff88ff');    // マウスを押さない時の色
    } 
    ellipse(mouseX, mouseY, 80, 80);    // 円を描画する
 
}