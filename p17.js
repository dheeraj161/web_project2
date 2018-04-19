var gamescore = document.querySelector("#gamescore");
var score=0;
var b11 = document.querySelector("#p11");
var b12 = document.querySelector("#p12");
var b13 = document.querySelector("#p13");
var b14 = document.querySelector("#p14");
var b21 = document.querySelector("#p21");
var b22 = document.querySelector("#p22");
var b23 = document.querySelector("#p23");
var b24 = document.querySelector("#p24");
var resetall = document.querySelector("#reset");
var wins=document.querySelector("#wins");
var player1=document.querySelector("#player1");
var player2=document.querySelector("#player2");
var input=document.querySelector("input");
//var winningscore=10;
winningscore=input.value;
//winningscore=wins;
var gameover=false;
var x=0;

//input values for player 1
b11.addEventListener("click", function(){
	if(!gameover && score<winningscore && x===0){
		score++;
		x++;
		if(score==winningscore){
			gameover=true;
			alert("player 1 wins");
			player1.textContent="player 1 wins";
			player1.classList.add("winner");
		}
	}
	gamescore.textContent=score;
});


b12.addEventListener("click", function(){
	if(!gameover && score<winningscore-1 && x===0){
		score+=2;
		x++;
		if(score==winningscore){
			gameover=true;
			alert("player 1 wins");
			player1.textContent="player 1 wins";
			player1.classList.add("winner");
		}
	}
	gamescore.textContent=score;
});

b13.addEventListener("click", function(){
	if(!gameover && score<winningscore-2 && x===0){
		score+=3;
		x++;
		if(score==winningscore){
			gameover=true;
			alert("player 1 wins");
			player1.textContent="player 1 wins";
			player1.classList.add("winner");
		}
	}
	gamescore.textContent=score;
});

b14.addEventListener("click", function(){
	if(!gameover && score<winningscore-3 && x===0){
		score+=4;
		x++;
		if(score==winningscore){
			gameover=true;
			alert("player 1 wins");
			player1.textContent="player 1 wins";
			player1.classList.add("winner");
		}
	}
	gamescore.textContent=score;
});


//input values for player 2
b21.addEventListener("click", function(){
	if(!gameover && score<winningscore && x===1){
		score++;
		x=0;
		if(score==winningscore){
			gameover=true;
			alert("player 2 wins");
			player2.textContent="player 2 wins";
			player2.classList.add("winner");
		}
	}
	gamescore.textContent=score;
});




b22.addEventListener("click", function(){
	if(!gameover && score<winningscore-1 && x===1){
		score+=2;
		x=0;
		if(score==winningscore){
			gameover=true;
			alert("player 2 wins");
			player2.textContent="player 2 wins";
			player2.classList.add("winner");
		}
	}
	gamescore.textContent=score;
});


b23.addEventListener("click", function(){
	if(!gameover && score<winningscore-2 && x===1){
		score+=3;
		x=0;
		if(score==winningscore){
			gameover=true;
			alert("player 2 wins");
			player2.textContent="player 2 wins";
			player2.classList.add("winner");
		}
	}
	gamescore.textContent=score;
});



b24.addEventListener("click", function(){
	if(!gameover && score<winningscore-3 && x===1){
		score+=4;
		x=0;
		if(score==winningscore){
			gameover=true;
			alert("player 2 wins");
			player2.textContent="player 2 wins";
			player2.classList.add("winner");
		}
	}
	gamescore.textContent=score;
});



resetall.addEventListener("click", function(){
	score=0;
	gameover=false;
	gamescore.textContent=0;
	player1.classList.remove("winner");
	player2.classList.remove("winner");
	player1.textContent="player 1";
	player2.textContent="player 2";
	x=0;
});



input.addEventListener("change", function(){
	winningscore=input.value;
});