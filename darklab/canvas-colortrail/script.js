document.body.onload = function () {
	var canvas = document.getElementById('backgroundCanvas');
	var ctx = canvas.getContext("2d");

	var actors = [];

	var start, current;

	function update(time) {
		if (!start) start = time;
		current = time - start;

		if (current > 16) {
			ctx.clearRect(0, 0, 500, 500);

			for (var i = 0; i < actors.length; i++) {
				actors[i].render(ctx);
				if (actors[i].r <= 0) {
					actors.splice(i, 1);
				}
			}
		}
		requestAnimationFrame(update);
	}

	requestAnimationFrame(update);

	canvas.addEventListener('mousemove', function (event) {

		var actor = new Actor(event.offsetX, event.offsetY, 30);
		actors[actors.length] = actor;

	});
}

class Actor {
	constructor(x, y, r) {
		this.x = x;
		this.y = y;
		this.r = parseInt(r);
		this.color = "rgb(" + Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255 + ")";
	}

	update() {
		if (this.r > 0) {
			this.r--;
		}
	}

	render(ctx) {
		this.update();

		ctx.beginPath();
		ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
		ctx.fillStyle = this.color;
		ctx.fill();
		ctx.stroke();
	}
}