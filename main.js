var myBtn = document.querySelector("#myBtn");
var gameSection = document.querySelector("#game-section");
var gameSectionW = gameSection.clientWidth - myBtn.clientWidth;
var gameSectionH = gameSection.clientHeight - myBtn.clientHeight;

//da prikaze i sakrije dugme i da ga prikazuje na random poziciji
function hideAndShow() {
  myBtn.style.top = Math.round(Math.random() * gameSectionH) + "px";
  myBtn.style.left = Math.round(Math.random() * gameSectionW) + "px";
  if (myBtn.style.display === "none") {
    myBtn.style.display = "";
  } else {
    myBtn.style.display = "none";
  }
}
//na svakih 1s
setInterval(hideAndShow, 2000);

//da prikaze trenutni rezultat playera
var scoreP = document.getElementById("player-score");

myBtn.addEventListener("click", function (e) {
  scoreP.innerText =
    parseInt(document.getElementById("player-score").innerText) + 1;
  e.stopPropagation(); //da zaustavi propagaciju eventa, tj. da ne racuna klik na bananu kao bod kompjuteru
  if (tryNumber.innerText > 0) {
    tryNumber.innerText =
      parseInt(document.getElementById("try-number").innerText) - 1; //da oduzme remaining tries number
  } if (tryNumber.innerText == 0 || scoreP.innerText >= 3) {
    gameWinner();
  }
});

var scoreC = document.getElementById("computer-score");
var tryNumber = document.getElementById("try-number");

gameSection.addEventListener("click", function () {
  if (tryNumber.innerText > 0) {
    tryNumber.innerText =
      parseInt(document.getElementById("try-number").innerText) - 1;
    scoreC.innerText =
      parseInt(document.getElementById("computer-score").innerText) + 1;
  } if (tryNumber.innerText == 0 || scoreC.innerText >= 3) {
    gameWinner();
  }
});

var winner = document.getElementById("winner");
function gameWinner() {
  if (scoreP.innerText > scoreC.innerText) {
    winner.innerText = " Player";
  } else {
    winner.innerText = " Computer";
  }
  tryNumber.innerText = 0;
}


