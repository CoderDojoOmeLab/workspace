//Copyright ©2021 by Shinnosuke Kataoka

var player_y = null

//init 的な物？
function setup() {
    //canvas
    createCanvas(600, 425);
    noStroke();
    player_y = width/2;
}

//run this function each frame
function draw() {
    
    

    //check for key input
    if (keyIsPressed) {
        //move player rectangle according to key input during the rect stays in the canvas
        if (key == "ArrowUp" && player_y-40 > 0) {
            player_y -= 10;
            //print("up");
        } else if (key == "ArrowDown" && player_y+40 < height) {
            player_y += 10;
            //print("down");
        }
    }


    //draw
    background(0); 

    //objects
    //player rect
    fill(255, 255, 255);
    rect(30, player_y, 10, 80);
    

}