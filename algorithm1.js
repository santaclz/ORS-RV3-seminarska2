// Random starting coordinates
let x = Math.floor(Math.random() * 101);	// 0 - 100
let y = Math.floor(Math.random() * 101);	// 0 - 100

// Amount to move in x nad y directon
let xt = Math.floor(Math.random() * 11) - 5;	// -5 - 5
let yt = Math.floor(Math.random() * 11) - 5;	// -5 - 5

// Will add option to change freq and color
let freq = 0.2;

function setup() {
	createCanvas(1240, 720, WEBGL);
	background('black');
	let theta = 0;

	for (let i=0; i<100; i++) {
		push();

		// Move in spiral direction further, as each i increases
		translate(xt*i*sin(theta), yt*i*cos(theta));

		// Color every fifth line
		if (i % 5 == 0) {
			stroke('#fae');
			strokeWeight(5);
		} else {
			stroke('white');
			strokeWeight(2);
		}

		// line(x1, y1, x2, y2) draws line between (x1, y1) and (x2, y2)
		// Second coordinates are affected by sin and cos resulting in spiral movement
		line(x, y, i*sin(theta), i*cos(theta));
		pop();

		theta += freq;
	}
}
