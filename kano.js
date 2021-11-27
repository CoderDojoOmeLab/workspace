//最初に1回だけ実行
function setup(){
    createCanvas(800,400);     // キャンバスのサイズ
    background('#000033');     // 背景の色(0;黒 #RRGGBB)
}
 
//1フレームごとに実行
function draw(){
    // マウスの場所にサークルをずーーっと描画する↓
    if (mouseIsPressed) { 
        fill('#00EE00'); 
    } else { 
        fill('#ff88ff');
    } 
    ellipse(mouseX, mouseY, 80,80);
 
}