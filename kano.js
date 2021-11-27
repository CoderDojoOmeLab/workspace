//HTMLページが読み込まれた後で１回だけ実行
window.onload = function() {
    document.getElementById("buttonA").addEventListener('click', changeShapeA);
    document.getElementById("buttonB").addEventListener('click', changeShapeB);
};


// 形を変える命令を送る
function changeShapeA() {
    document.getElementById("形").textContent = "△";
}
function changeShapeB() {
    document.getElementById("形").textContent = "○";
}


//キャンバス：最初の1回だけ実行
function setup(){
    createCanvas(800,400).parent('キャンバスの位置');     // キャンバスのサイズ
    background('#000033');     // 背景の色(0;黒 #RRGGBB)
};
 

//キャンバス：ずーっと↓ここを繰り返す。マウスの位置に図形を描画する
function draw(){
    // 形を調べる
    strShape = document.getElementById("形").textContent;

    // マウスを調べて、色を決める
    if (mouseIsPressed) { 
        fill('#00EE00');    // マウスを押したときの色
    } else { 
        fill('#ff88ff');    // マウスを押さない時の色
    } 

    // 形を書く
    switch (strShape) {
        case "○":
            ellipse(mouseX, mouseY, 80, 80);    // 円を描く
            break;
        case "△":
            triangle(mouseX-50, mouseY+50, mouseX+50, mouseY+50, mouseX, mouseY-50); // 三角形を描く
            break;
        default:
            rect(mouseX-10, mouseY-10, 20, 20);
            break;
    }
};

