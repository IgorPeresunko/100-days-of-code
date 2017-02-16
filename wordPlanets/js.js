'use strict';

//main
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

const bgCanvas = document.querySelector('#bgCanvas');
const bgCtx = bgCanvas.getContext('2d');

//actually balls not looks like balls, more than squares
const balls = [];

//vars
const bgColor = '#000';//rgb(13, 91, 92)';
const colors = ['#F0D1EC', '#88D796', '#DE9D9C'];
const ballsColors = '#fff'; 
const ballsSize = 12;
const maxBallSize = 50;
const ballsCount = 500;
const speedIncrease = 2.8;
const areaSize = 15;
const distanse = 10;
const text = 'Hey ';//Global Logic I want to work with you!';

let isBalls = true;
let X = -100;
let Y = -100;

const getRotatingSpeed = () => [50, 100, 150][Math.floor(Math.random() * 3)];
const getSpeed = () => Math.floor(Math.random() * 6) - 3;
const getBgColor = () => ['#F0D1EC', '#88D796', '#DE9D9C'][Math.floor(Math.random() * 3) - 1];

//app cycle
const update = () => {

    draw();
    animation();

    requestAnimationFrame(update);
}

//draw
const draw = () => {
    clearCanvas();
    drawBalls();
    if (!isBalls) drawText();    
}

const clearCanvas = () => {
    ctx.fillStyle = bgColor;
    if (isBalls) {
        ctx.fillStyle = '#88D796';
    }
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

const drawBalls = () => {
    balls.forEach(ball => {
        if (!isBalls) {
            ctx.save();
            ctx.translate(ball.x + ball.radius / 2, ball.y + ball.radius / 2);
            ctx.rotate(ball.angle);
            ctx.fillStyle = ball.color;

            ctx.fillRect(-ball.radius/2, -ball.radius/2, ball.radius, ball.radius);   
            ctx.restore();
            
            if (ball.angle < 5) {
                ball.angle += Math.PI * ball.rotatingSpeed / 4500;
            } else {
                ball.angle -= Math.PI * 5;
            }
        } else {
            ctx.fillStyle = ball.color;
            ctx.beginPath();
            ctx.arc(ball.x, ball.y, ball.radius/2, 0, Math.PI * 2);
            ctx.fill();
        }    
    });
}

const drawText = () => {
    ctx.font = " 15px Comic Sans MS";
    ctx.fillStyle = '#fff';
    ctx.fillText("Click on me!", canvas.width / 2 - 30, canvas.height / 2);
}

//animation
const animation = () => {
    changeBallsSize();
    if (isBalls) {
        moveBalls(); 
    } else {
        moveSquares();
    }
}

const changeBallsSize = () => {
    balls.forEach(ball => {
        if ((X > ball.x - areaSize) && (X < ball.x + areaSize)
            && (Y > ball.y - areaSize) && (Y < ball.y + areaSize)) {
                if (ball.radius < maxBallSize) {
                    ball.radius += speedIncrease;
                    ball.rotatingSpeed = 0;
                    ball.dx = 0;
                    ball.dy = 0;
                }
                ball.color = getBgColor();
            } else {
                if (ball.radius > ballsSize) {
                    ball.radius -= speedIncrease;
                    ball.rotatingSpeed = getRotatingSpeed();
                    ball.dx = getSpeed();
                    ball.dy = getSpeed();
                }
            }
    }); 
}

const moveSquares = () => {
    balls.forEach(ball => {
        if (ball.text) console.log(ball.x);
        ball.x += ball.dx * ball.freeze;
        ball.y += ball.dy * ball.freeze;
        if (ball.x > canvas.width) {
            ball.x = canvas.width - ball.radius;
            ball.dx *= -1;
        }
        if (ball.x < 0) {
            ball.x = ball.radius;
            ball.dx *= -1;
        }
        if (ball.y < 0) {
            ball.y = ball.radius;
            ball.dy *= -1;
        }
        if (ball.y > canvas.height) {
            ball.y = canvas.height - ball.radius;
            ball.dy *= -1;
        }
    });
}

const moveBalls = () => {

}

//balls
const addBall = () => {
    if (balls.length >= ballsCount) return;    
    balls.push({
        isBall: true,
        radius: ballsSize,
        color: ballsColors,//[Math.floor(Math.random() * 3) + 1],
        x: Math.floor(Math.random() * canvas.width),
        y: Math.floor(Math.random() * canvas.height),
        dx: getSpeed(),
        dy: getSpeed(),
        angle: 0,
        rotatingSpeed: getRotatingSpeed(),
        freeze: .5
    });
}

const createBalls = () => {
    for (let i = 0; i < ballsCount; ++i) {
        addBall();
    }
}

//text
const makeText = () => {
    bgCtx.fillStyle = "#000000";
    bgCtx.font = '300px impact';
    bgCtx.fillText(text, 85, 275);

    getCoords();
    update();
}

const getCoords = () => {

    const imgData = bgCtx.getImageData(0, 0, bgCanvas.width, bgCanvas.height);
    console.log(imgData);
    let pixel;

    for (let i = 0; i < bgCanvas.height; i += distanse) {
        for (let j = 0; j < bgCanvas.width; j += distanse) {
            pixel = imgData.data[((j + (i + bgCanvas.width)) * 4) - 1];
            if (pixel == 255) {
                console.log(i, j);
            }
        }
    }

}

//listeners

canvas.addEventListener('mousemove', (event) => {
    X = event.pageX;
    Y = event.pageY;
});

canvas.addEventListener('click', () => {
    isBalls = isBalls ? false : true;
});


///helping funcs
const resize = (canvas) => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

const init = () => {
    resize(canvas);    
    resize(bgCanvas);
    createBalls();
    makeText();
    //update();
}

window.onresize = resize;
window.onload = init;