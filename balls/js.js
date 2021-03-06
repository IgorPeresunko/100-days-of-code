'use strict';

const 	canvas = document.getElementById('canvas'),
		ctx = canvas.getContext('2d'),
		circles = new Array();

/////// DRAWING /////////

function draw() {
	
	ctx.fillStyle = '#f2f2f2';
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	for (let i = 0; i < circles.length; i++) {
		ctx.fillStyle = circles[i].color;
		ctx.beginPath();
		//console.log(circles[i].color);
		ctx.arc(circles[i].x, circles[i].y, circles[i].radius, 0, 2*Math.PI);

		ctx.fill();
	}

	ctx.fillStyle = 'black';
	ctx.font = "18px Arial";
	ctx.fillText('Balls: ' + (circles.length) , 10, canvas.height - 15);


}


///// UPDATING //////
let collision = true;
function update() {
	if (collision) {

		for (let i = 0; i < circles.length; i++) {
		
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

	}
	

	if (circles.length > 1) {

		for (let i = 0; i < circles.length; i++) {
			for(let j = 0; j < circles.length; j++) {
				
				if ((j!==i) &&
					(Math.abs(circles[i].y - circles[j].y) <= (circles[i].radius + circles[j].radius)) && 
					(Math.abs(circles[i].x - circles[j].x) <= (circles[i].radius + circles[j].radius))) {
						
					//	circles[i].y = circles[j].y + circles[i].radius;
					//	circles[j].y = circles[i].i - circles[j].radius;

					/*	circles[i].dy /= 2;
						circles[i].dy *= -1;
						circles[i].dx += circles[i].dx >= 10 ? 0 : 0.1;

						circles[j].dy *= 2;
						circles[j].dy /= -1;
						circles[j].dx += circles[i].dx >= 10 ? 0 : 0.1;*/


						
				} else {
					//todo: whatever
				}
								

			}
		}

	}


	draw();
	if (circles.length > 400) circles.splice(0,1);

	requestAnimationFrame(update);
}



/////// OTHERS FUNCTIONS //////////

document.body.onmousemove = () => {
	circles.push({
		x: event.pageX,
		y: event.pageY,
		dy: Math.random() * 10 - 15,
		dx: Math.random() * 10 - 5,
		radius: Math.random() * 70,
		color: (function() {
			let letters = '0123456789ABCDEF'.split(''),
				colors = '#';
			for (let i = 0; i < 6; i++) {
				colors += letters[Math.round(Math.random() * 15)];
			}

			return colors;
		}())
	});
}

document.addEventListener('keydown', function (e) {
	if (e.keyCode === 32) {
		circles.length = 0;
	}
	if (e.keyCode === 81) {
		collision = !collision;
	}
	if (e.keyCode === 107) {
		circles.forEach((circle) => {
			circle.dx+=10;
			circle.dy+=10
		});
	}
	if (e.key === 'w') {
		circles.forEach((circle) => {
			circle.addEventListener('onmousemove', () => {
				console.log(circle);
			});
		});
	}
});



window.onresize = () => {
	canvas.height = window.innerHeight;
	canvas.width = window.innerWidth;
}

window.onload = () => {
	canvas.height = window.innerHeight;
	canvas.width = window.innerWidth;
	
	update();
}

