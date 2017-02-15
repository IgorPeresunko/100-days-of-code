'use strict';

//main
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

const balls = [];

//vars
const bgColor = 'rgb(13, 91, 92)';
const ballsColors = ['yellow', '#F0D1EC', '#88D796', '#DE9D9C'];
const ballsSize = 10;
const ballsCount = 200;

//app cycle
const update = () => {

    draw();

    requestAnimationFrame(update);
}

//draw
const draw = () => {
    clearCanvas();
    drawBalls();    
}

const clearCanvas = () => {
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

const drawBalls = () => {
    balls.forEach(ball => {
        ctx.fillStyle = ball.color;
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
        ctx.fill();
    });
}

//balls
const addBall = () => {
    if (balls.length >= 100) return;
    
    balls.push({
        radius: ballsSize,
        color: ballsColors[Math.floor(Math.random() * 3) + 1],
        x: Math.floor(Math.random() * canvas.width),
        y: Math.floor(Math.random() * canvas.height),
        dx: 10,
        dy: -10
    });
}

const createBalls = () => {
    for (let i = 0; i < ballsCount; ++i) {
        addBall();
    }
}

///helping funcs
const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

const init = () => {
    resize();
    createBalls();
    update();
}

window.onload = init;