function spiral() {
	var fgcolor = document.getElementById("primary").value;
	var bgcolor = document.getElementById("background").value;
	var width = document.getElementById("screenwidth").value;
	var height = document.getElementById("screenheight").value;
	var freq = document.getElementById("freqchanger").value;
	localStorage.setItem("primcolor", fgcolor);
	localStorage.setItem("bgcolor", bgcolor);
	localStorage.setItem("width", width);
	localStorage.setItem("height", height);
	localStorage.setItem("freq", freq);


	$("iframe").attr("src", "spiral.html");
}

function blocks() {
	var fgcolor = document.getElementById("primary").value;
	var bgcolor = document.getElementById("background").value;
	var width = document.getElementById("screenwidth").value;
	var height = document.getElementById("screenheight").value;
	var freq = document.getElementById("freqchanger").value;
	localStorage.setItem("primcolor", fgcolor);
	localStorage.setItem("bgcolor", bgcolor);
	localStorage.setItem("width", width);
	localStorage.setItem("height", height);
	localStorage.setItem("freq", freq);
	
	$("iframe").attr("src", "block_city.html");
}
