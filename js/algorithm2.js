// Starting width, heigh, depth of boxes
let w = Math.floor(Math.random() * 51) + 10;	// 10 - 60
let h = Math.floor(Math.random() * 91) + 10;	// 10 - 100
let d = Math.floor(Math.random() * 491) + 10;	// 10 - 500

let xt = 0;
let yt = 0;

// Will add option to change freq and color
let freq = 0.2;

// Color
let primcolor = localStorage.getItem("primcolor");
let bgcolor = localStorage.getItem("bgcolor");

// Resolution
let width = localStorage.getItem("width");
let height = localStorage.getItem("height");


function setup() {
	// Background
	createCanvas(width, height, WEBGL);
	background(bgcolor);

	let theta = 0;

	let inc_y = true;

	// Go to left upper corner
	translate(-width/2, -height/2);


	for (let i=0; i<width/2; i++) {
		push();

		// Check if yt is at the edge of screen, invert direction and move right
		// Moves down, right, up, righ, down...
		if (Math.abs(yt) > height) {
			inc_y = !inc_y;
			xt += width/20;
		}

		if (inc_y) yt += 50;
		else yt -= 50;
		
		translate(xt, yt);

		// Set box colors and line width
		stroke(primcolor);
		strokeWeight(2);
		fill(bgcolor);

		// Create box
		box(w*sin(theta), h*cos(theta), d*sin(theta));
		pop();

		// Increase angle for trig functions
		theta += freq;
	}
}
