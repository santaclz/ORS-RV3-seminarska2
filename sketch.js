let x = Math.floor(Math.random() * 100);
let y = Math.floor(Math.random() * 100);

let xt = Math.floor(Math.random() * 10) - 5;
let yt = Math.floor(Math.random() * 10) - 5;

function setup() {
	createCanvas(1240, 720, WEBGL);
	background('black');
	let theta = 0;

	for (let i=0; i<100; i++) {
		push();
		translate(xt*i*sin(theta), yt*i*cos(theta));
		if (i % 5 == 0) {
			stroke('#fae');
			strokeWeight(5);
		} else {
			stroke('white');
			strokeWeight(2);
		}
		line(x, y, i*sin(theta), i*cos(theta));
		pop();
		theta += 0.2;
	}
}
