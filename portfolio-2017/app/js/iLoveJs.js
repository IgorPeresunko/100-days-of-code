//main
const loveCanvas = document.querySelector('.love-canvas');
const loveCtx = loveCanvas.getContext('2d');

const bgCanvas = document.createElement('canvas');
const bgCtx = bgCanvas.getContext('2d');

//actually balls not looks like balls, more than squares
const balls = [];

//vars
const bgColor = '#000';
const ballsColors = '#fff'; 
const ballsSize = 12;
const maxBallSize = 50;
const ballsCount = 500;
const speedIncrease = 2.8;
const areaSize = 20;
const distanse = 10;
const text = ['I', 'love', 'JavaScript'];

let isBalls = false;
let turnToBalls = !isBalls;
let X = -100;
let Y = -100;

const getRotatingSpeed = () => [50, 100, 150][Math.floor(Math.random() * 3)];
const getSpeed = () => Math.floor(Math.random() * 6) - 3;
const getBgColor = () => '#FFA500';

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
  
    loveCtx.fillStyle = isBalls ? getBgColor() : bgColor;   
    loveCtx.fillRect(0, 0, loveCanvas.width, loveCanvas.height);
}

const drawBalls = () => {
    balls.forEach(ball => {
        loveCtx.fillStyle = ball.color;
        if (!isBalls) {
            loveCtx.save();
            loveCtx.translate(ball.x + ball.radius / 2, ball.y + ball.radius / 2);
            loveCtx.rotate(ball.angle);

            loveCtx.fillRect(-ball.radius/2, -ball.radius/2, ball.radius, ball.radius);   
            loveCtx.restore();
            
            if (ball.angle < 5) {
                ball.angle += Math.PI * ball.rotatingSpeed / 4500;
            } else {
                ball.angle -= Math.PI * 5;
            }
        } else {
            loveCtx.beginPath();
            loveCtx.arc(ball.x, ball.y, ball.radius/2, 0, Math.PI * 2);
            loveCtx.fill();
        }    
    });
}

const drawText = () => {
    loveCtx.font = " 15px Comic Sans MS";
    loveCtx.fillStyle = '#fff';
    loveCtx.fillText("Click on me!", loveCanvas.width / 2 - 30, loveCanvas.height / 2);
}

//animation
const animation = () => {
    if (isBalls && turnToBalls) {
       getCoords(); 
       turnToBalls = false;
    } else if (!isBalls) {
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
                if (!isBalls) ball.color = getBgColor();
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
        ball.x += ball.dx * ball.freeze;
        ball.y += ball.dy * ball.freeze;
        if (ball.x > loveCanvas.width) {
            ball.x = loveCanvas.width - ball.radius;
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
        if (ball.y > loveCanvas.height) {
            ball.y = loveCanvas.height - ball.radius;
            ball.dy *= -1;
        }
    });
}

const moveBallsToWord = (j, i, ball) => {
    let b = balls[ball];    
    b.color = '#fff';

    let interval = setInterval(() => {
        if (b.x != i && b.y != j && isBalls) {
            b.x = b.x*.9 + i*.1;
            b.y = b.y*.9 + j*.1;
        } else {
            clearInterval(interval);
        }
    }, 20);        
}

//balls
const addBall = () => {  
    balls.push({
        radius: ballsSize,
        color: ballsColors,
        x: Math.floor(Math.random() * loveCanvas.width),
        y: Math.floor(Math.random() * loveCanvas.height),
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
    bgCtx.font = '150px impact';
    let i = 1;
    text.forEach(t => {
        bgCtx.fillText(t, 60, 200 * i++);
    });
}

const getCoords = () => {

    const imgData = bgCtx.getImageData(0, 0, bgCanvas.width, bgCanvas.height);
    let pixel, ball = -1;

    for (let i = 0; i < bgCanvas.height; i += distanse) {
        for (let j = 0; j < bgCanvas.width; j += distanse) {
            pixel = imgData.data[((j + (i * bgCanvas.width)) * 4) + 3];
            if (pixel === 255) {
                ball++;
                if (ball === balls.length) {
                    addBall();
                }
                moveBallsToWord(i, j, ball);
            }
        }
    }

}
//listeners
loveCanvas.addEventListener('mousemove', (event) => {
    X = event.pageX;
    Y = event.pageY - window.scrollY;
    
    changeBallsSize();
});

loveCanvas.addEventListener('click', () => {
    if (isBalls) {
        isBalls = false;
        turnToBalls = false;
    } else {
        isBalls = true;
        turnToBalls = true;
    }
});


///helping funcs
const resize = (canvas) => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

const init = () => {
    resize(loveCanvas);    
    resize(bgCanvas);
    createBalls();
    makeText();
    update();
}



init();
