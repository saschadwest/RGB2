//get modal elemeent
var model = document.getElementById("simpleModal");
var modalBtn = document.getElementById("modalBtn");
var closeBtn = document.querySelector(".closeBtn");
var squares = document.querySelectorAll(".square");
var modeBtns = document.querySelectorAll(".mode")
var colorDisplay = document.querySelector("#colorDisplay");
var message 	= document.querySelector("#message");
var h1 			= document.querySelector("h1");
var resetBtn = document.querySelector("#reset")
var pickedColor;
var colors= [];
var numSquares = 6;

// modalBtn.addEventListener("click",openModal)
// 	// function to open modal
// 	function openModal(){
// 		model.style.display ="block";
// 	}

window.addEventListener("click",function(e){
	if(e.target == model){
		sound9.play();
		model.style.display ="none";
	}
})

modalBtn.addEventListener("click",function(){
	sound8.play();
	model.style.display ="block";
});
closeBtn.addEventListener("click",function(){
	sound9.play();
	model.style.display ="none";
});


// below is code for color game


// gotta fix the wrong click and all go blank

//initialize Game

init();

function init(){
		setUpBtns();
	setUpSquares();
		reset();
}

function reset(){
	console.log(numSquares);
	colors = generateColors(numSquares);
	console.log(colors);
	//setUpSquares();
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	resetBtn.textContent = "New Colors";
	message.textContent = " ";
	for (var i =0 ; i < squares.length; i ++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		};
	
		
	}
	h1.style.backgroundColor = "steelblue";
	count = 0;
}


// create color
function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

// take color and push it into a tank
function generateColors(num){
	var arr = [];
	for (var i = 0; i < num; i ++){
		arr.push(randomColor());
	}
	return arr;
}

// pick color

function pickColor(){
		var random = Math.floor(Math.random() * colors.length);
		return colors[random];
}

// if right color is selected
function changeColors(color){
	for(var i = 0; i < squares.length ; i++){
		squares[i].style.backgroundColor = color;
	}
}

// buttons below

function setUpBtns(){
	for(var i=0; i < modeBtns.length; i++){
		modeBtns[i].addEventListener("click",function(){
			
			modeBtns[0].classList.remove("selected");
			modeBtns[1].classList.remove("selected");
			modeBtns[2].classList.remove("selected");
			this.classList.add("selected");
				
			if(this.textContent === "EASY"){
				sound7.play();
				numSquares = 3;
			}else if(this.textContent === "HARD"){
				sound6.play();
				numSquares = 6;
				}else{
					sound5.play();
					numSquares = 50;
				}
			reset();
			});
		}
	}

// reset button

	resetBtn.addEventListener("click",function(){
		sound4.play();
		reset();
	});



// set up square conditions

function setUpSquares(){

	for(var i = 0; i < squares.length; i++){
		squares[i].addEventListener("click",function(){

		var clickedColor = this.style.backgroundColor;
			
		if(clickedColor === pickedColor){
			sound2.play();
			changeColors(clickedColor);
			message.textContent = "NICE!!!";
			h1.style.backgroundColor = clickedColor;
			resetBtn.textContent = "PLAY AGAIN?";
			
		}else{
			sound.play();
			this.style.background = "#202020"
			message.textContent = ":(";
			count ++;
			console.log(count);
			if(count === 3){
				sound3.play();
				alert("3 Strikes and your outta here.");
				sound4.play();
				reset();
			}
			
		}
			
	});
	}
}


//howler
var sound = new Howl({
  src: ['../sounds/bubbles.mp3']
});

var sound2 = new Howl({
  src: ['../sounds/prism-2.mp3']
});

var sound3 = new Howl({
  src: ['../sounds/clay.mp3']
});

var sound4 = new Howl({
  src: ['../sounds/wipe.mp3']
});

var sound5 = new Howl({
  src: ['../sounds/piston-3.mp3']
});

var sound6 = new Howl({
  src: ['../sounds/zig-zag.mp3']
});

var sound7 = new Howl({
  src: ['../sounds/suspension.mp3']
});

var sound8 = new Howl({
  src: ['../sounds/pinwheel.mp3']
});

var sound9 = new Howl({
  src: ['../sounds/glimmer.mp3']
});

var audio =document.getElementById("audio");

audio.volume = 0.2;


new audio();