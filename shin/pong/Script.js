//Copyright ©2021 by Shinnosuke Kataoka

//my functions 
function genRadom(min, max, randomNega = false) {
    var list = [1, -1];
    var num = Math.floor(Math.random() * (max + 1 - min)) + min;
    num = Math.floor( num );
    if (randomNega) {  //make it negative randomly
        num *= list[Math.floor(Math.random() * (2)) + 0];
    }
    return num;
}

function getSpriteAngle(spriteName) {   //getDirectionがあったから作る必要なかった。
    v = spriteName.velocity;
    //useing complex number to calcurate angle
    if (v.x > 0) {
        angle = Math.floor(atan(v.y/v.x)/(Math.PI/180)) -180;
    } else if (v.x < 0){
        angle = Math.floor(atan(v.y/v.x)/(Math.PI/180));
    }
    return angle;
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

    //bot player
    bot = createSprite(width - 30, height/2, 10, 80);
    bot.shapeColor = color(255);

    //group
    racket = new Group();
    racket.add(player);
    racket.add(bot);

    //ball 
    ball = createSprite(width/2, genRadom(5, height-5), 10, 10);
    var angle = genRadom(30, 150, true) - 90;
    ball.maxSpeed = 4;
    ball.setSpeed(ball.maxSpeed, angle);
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

    //bot  
    if (ball.position.x > width/2) { // when ball on the right side of the canvas
        if (ball.position.y < bot.position.y) { // in case that ball y coordinate above bot racket 
            bot.position.y -= 5;
        } else if (ball.position.y > bot.position.y) {
            bot.position.y += 5;
        }
    }

    //ball 
    ball.collide(racket, bounceBall)
    function bounceBall() {
        ball.setSpeed(ball.maxSpeed, getSpriteAngle(ball) * -1);
    }
    //when hit xAxis wall 
    if (ball.position.y >= height - ball.height/2 || ball.position.y <= ball.height/2) {
        ball.setSpeed(ball.maxSpeed, ((getSpriteAngle(ball) -90) * -1) + 90);
    }
    // reset ball position
    if (ball.position.x < 0 || ball.position.x > width) {
        if (ball.position.x < 0) {
            ball.setSpeed(ball.maxSpeed, (genRadom(30, 150) *-1) - 90);
        } else if (ball.position.x > width) {
            ball.setSpeed(ball.maxSpeed, genRadom(30, 150) - 90);
        }
        ball.position = createVector(width/2, genRadom(ball.height/2, height - ball.height/2));
        ball.setDefaultCollider();
    }


    //draw
    background(0); 

    //sprites
    drawSprites();
}