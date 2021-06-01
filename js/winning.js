console.log("hello world");

var button1 = document.querySelector("#plus");
var button2 = document.querySelector("#min");
console.log(button1);
console.log(button2);

var scoreboard = document.querySelector("#score");

var body = document.querySelector("body");
console.log(body);

var score = 0;
var gehaald = 9;

function scorePlus() {
var newscore = score ++;
    scoreboard.textContent = newscore;

    if (newscore == 9) {
        console.log("EPIC WINN!");
        body.classList.add("winning");
    } else {
        console.log("dischtbij maar nog niet op locatie");
    }
}

button1.addEventListener("click", scorePlus);

function scoreMin() {
    newscore = score --;
    scoreboard.textContent = newscore;
}

button2.addEventListener("click", scoreMin);



console.log(score);

if (score > gehaald) {
    console.log("good");
    scoreboard.innerHTML = 0;
}

if (score == 0) {
    console.log("momenteel niks aan de hand");
}


//way around that did not work.
//function scorePlus(){
//    score.value = parseInt(score.value) +1;
//}

//button1.addEventListener("click", scorePlus);
//console.log(score);