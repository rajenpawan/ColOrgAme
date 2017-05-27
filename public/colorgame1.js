var colors = generateRandomColors(6);
var numSquares = 6;
// var colors = [
// "rgb(255, 0, 0)", 
// "rgb(255, 255, 0)", 
// "rgb(0, 255, 0)", 
// "rgb(0, 255, 255)", 
// "rgb(0, 0, 255)", 
// "rgb(255, 0, 255)"
// ]

var squares = document.querySelectorAll(".square");
var pickedcolor = pickcolor();
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");


function reset(){
	colors = generateRandomColors(numSquares);
	pickedcolor = pickcolor();
	colorDisplay.textContent = pickedcolor;
	resetButton.textContent = "New Colors"
	messageDisplay.textContent = "";
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block"
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
		squares[i].style.background = colors[i];
	}
	h1.style.background = "steelblue";
}
easybtn.addEventListener("click", function(){
	hardbtn.classList.remove("selected");
	easybtn.classList.add("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedcolor = pickcolor();
	colorDisplay.textContent = pickedcolor;
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});
hardbtn.addEventListener("click", function(){
	hardbtn.classList.add("selected");
	easybtn.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedcolor = pickcolor();
	colorDisplay.textContent = pickedcolor;
	for(var i = 0; i < squares.length; i++){
			squares[i].style.background = colors[i];
			squares[i].style.display = "block";
	}
});
var resetButton = document.querySelector("#reset");
	resetButton.addEventListener("click", function(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new color from array
	pickedcolor = pickcolor();
	//change color display to match picked color
	colorDisplay.textContent = pickedcolor;
	this.textContent = "New colors"
	messageDisplay.textContent = "";
	//change colors of square
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i];
	}
	h1.style.background = "steelblue";
});
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedcolor;
for(var i = 0; i < squares.length; i++){
	//add initial colors to squares
	squares[i].style.background = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedcolor = this.style["background-color"];
		//compare color to pickedcolor
		console.log(clickedcolor, pickedcolor);
		if(clickedcolor === pickedcolor){
			messageDisplay.textContent = "Correct!"
			resetButton.textContent = "Play Again??"
			changeColors(clickedcolor);
			h1.style["background-color"] = clickedcolor;
			} else {
				this.style["background-color"] = "#232323";//this changes wrong selection to background color
				messageDisplay.textContent = "Try Again!!"
			}
	});
}

function changeColors(color){
	//loop through all squares
	for(var u = 0; u < squares.length; u++){
		squares[u].style["background-color"] = color;
	}
	//Change each color to matchgiven color
}
function pickcolor(){
	var random = Math.floor(Math.random() * colors.length)
	return colors[random];
}


function generateRandomColors(num){
	//make an 
	arr = []
	//repeat num times
	for(var i = 0; i < num; i++){
//get random color and push into arr
		arr.push(randomColor())
	}
	//return that Array
	return arr;
}
//this creates 6 random color for square
function randomColor(){ 
	//pick a "red" from 0 - 255	
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255 
	var b = Math.floor(Math.random() * 256);
	"rgb(r, g, b)"
	return "rgb(" + r + ", " + g + ", " + b + ")";
}