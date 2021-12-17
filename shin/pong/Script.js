//Copyright ©2021 by Shinnosuke Kataoka

//my functions 
function genRadom(min, max, randomNega) {
    var list = [1, -1];
    var num = Math.floor(Math.random() * (max + 1 - min)) + min;
    num = Math.floor( num );
    if (randomNega) {  //make it negative randomly
        num *= list[Math.floor(Math.random() * (2)) + 0]
    }
    return num;
}


//init 的な物？
function setup() {
    //canvas
    createCanvas(600, 425);
    noStroke();

    //sounds

    //player
    player = createSprite(30, height/2, 10, 80);
    player.shapeColor = color(255);
    player.limitSpeed(0);

    //ball 
    ball = createSprite(width/2, genRadom(5, height-5), 10, 10);
    var angle = genRadom(30, 150, true) - 90;
    ball.addSpeed(5, angle);
    print(angle);
    v = ball.velocity;
    print(v.x)
    ball.shapeColor = color(255);
    
    

}

//run this function each frame
function draw() {

    //check for key input
    if (keyIsPressed) {
        //move player rectangle according to key input during the rect stays in the canvas
        if (key == "ArrowUp" && player.position.y-40 > 0) {
            player.position.y -= 10;
            //print("up");
        } else if (key == "ArrowDown" && player.position.y+40 < height) {
            player.position.y += 10;
            //print("down");
        }
    }


    //ball
    ball.collide(player, bounceBall)
    function bounceBall() {
        ball.setSpeed(5, ball.getSpeed() * -1);
        print("!")
    }
    //when hit xAxis wall 

    
    if (ball.position.y >= height - ball.height/2 || ball.position.y <= ball.height/2) {
        print("!!")
        v = ball.velocity;
        if (v.x > 0) {
            theta = Math.floor(atan(v.y/v.x)/(Math.PI/180)) -180
        } else {
            //use complex number to calcurate angle 
            theta = Math.floor(atan(v.y/v.x)/(Math.PI/180));
        }


        print (theta)
        ball.setSpeed(5, ((theta -90) * -1) + 90);
    }
    

    //draw
    background(0); 

    //sprites
    drawSprites();

    

    

}