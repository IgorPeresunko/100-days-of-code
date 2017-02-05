'use strict';

var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    circles = new Array();

/////// DRAWING /////////

function draw() {

	ctx.fillStyle = '#f2f2f2';
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	for (var i = 0; i < circles.length; i++) {
		ctx.fillStyle = circles[i].color;
		ctx.beginPath();
		//console.log(circles[i].color);
		ctx.arc(circles[i].x, circles[i].y, circles[i].radius, 0, 2 * Math.PI);

		ctx.fill();
	}

	ctx.fillStyle = 'black';
	ctx.font = "18px Arial";
	ctx.fillText('Balls: ' + circles.length + '. Press "space" for delete all circles', 10, canvas.height - 15);
}

///// UPDATING //////

function update() {

	for (var i = 0; i < circles.length; i++) {

		circles[i].y += circles[i].dy;
		circles[i].x += circles[i].dx;

		circles[i].dy += circles[i].dy >= 10 ? 0 : 0.1;

		if (circles[i].y + circles[i].radius >= canvas.height) {
			circles[i].y = canvas.height - circles[i].radius;
			circles[i].dy /= 2;
			circles[i].dy *= -1;
		}

		if (circles[i].x + circles[i].radius >= canvas.width) {
			circles[i].x = canvas.width - circles[i].radius;
			circles[i].dx /= 2;
			circles[i].dx *= -1;
		}
		if (circles[i].x - circles[i].radius <= 0) {
			circles[i].x = circles[i].radius;
			circles[i].dx /= 2;
			circles[i].dx *= -1;
		}
	}

	if (circles.length > 1) {

		for (var _i = 0; _i < circles.length; _i++) {
			for (var j = 0; j < circles.length; j++) {

				if (j !== _i && Math.abs(circles[_i].y - circles[j].y) <= circles[_i].radius + circles[j].radius && Math.abs(circles[_i].x - circles[j].x) <= circles[_i].radius + circles[j].radius) {

					//	circles[i].y = circles[j].y + circles[i].radius;
					//	circles[j].y = circles[i].i - circles[j].radius;

					circles[_i].dy /= 2;
					circles[_i].dy *= -1;
					circles[_i].dx += circles[_i].dx >= 10 ? 0 : 0.1;

					circles[j].dy *= 2;
					circles[j].dy /= -1;
					circles[j].dx += circles[_i].dx >= 10 ? 0 : 0.1;
				} else {
					//todo: whatever
				}
			}
		}
	}

	draw();

	requestAnimationFrame(update);
}

/////// OTHERS FUNCTIONS //////////

document.body.onmousemove = function () {
	circles.push({
		x: event.pageX,
		y: event.pageY,
		dy: Math.random() * 10 - 5,
		dx: Math.random() * 10 - 5,
		radius: Math.random() * 100,
		color: function () {
			var letters = '0123456789ABCDEF'.split(''),
			    colors = '#';
			for (var i = 0; i < 6; i++) {
				colors += letters[Math.round(Math.random() * 15)];
			}

			return colors;
		}()
	});
};

document.addEventListener('keydown', function (e) {
	if (e.keyCode === 32) {
		circles = [];
	}
});

window.onresize = function () {
	canvas.height = window.innerHeight;
	canvas.width = window.innerWidth;
};

window.onload = function () {
	canvas.height = window.innerHeight;
	canvas.width = window.innerWidth;

	update();
};