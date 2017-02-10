const 	canvas = document.getElementById('balls-canvas'),
		ctx = canvas.getContext('2d'),
		circles = [];

canvas.width = innerWidth;
canvas.height = innerHeight;

/////// DRAWING /////////

function draw() {
	
	ctx.fillStyle = '#f2f2f2';
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	for (let i = 0; i < circles.length; i++) {
		ctx.fillStyle = circles[i].color;
		ctx.beginPath();
		ctx.arc(circles[i].x, circles[i].y, circles[i].radius, 0, 2*Math.PI);

		ctx.fill();
	}

}


///// UPDATING //////

function update() {
	
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

	if (circles.length > 1) {

		for (let i = 0; i < circles.length; i++) {
			for(let j = 0; j < circles.length; j++) {
				
				if ((j!==i) &&
					(Math.abs(circles[i].y - circles[j].y) <= (circles[i].radius + circles[j].radius)) && 
					(Math.abs(circles[i].x - circles[j].x) <= (circles[i].radius + circles[j].radius))) {
						
						circles[i].dy /= 2;
						circles[i].dy *= -1;
						circles[i].dx += circles[i].dx >= 10 ? 0 : 0.1;

						circles[j].dy *= 2;
						circles[j].dy /= -1;
						circles[j].dx += circles[i].dx >= 10 ? 0 : 0.1;


						
				} 
            }
		}
	}

    if (circles.length > 10) circles.splice(0, 1);

	draw();

	requestAnimationFrame(update);
}



/////// OTHERS FUNCTIONS //////////

document.querySelector('#balls-canvas').onmousemove = () => {
	circles.push({
		x: event.pageX,
		y: event.pageY - innerHeight,
		dy: Math.random() * 10 - 5,
		dx: Math.random() * 10 - 5,
		radius: Math.random() * 100,
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

update();