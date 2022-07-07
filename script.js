"use strict";
//DOM - QUERYSELECTOR

// console.log(document.querySelector('.message').textContent);

// //TO CHANGE THE CONTENT -
// document.querySelector('.message').textContent = 'you are correct'

// document.querySelector('.number').textContent = 50
// document.querySelector('.score').textContent = 100
// //TO GET VALUE OF AN INPUT FIELD -
// console.log(document.querySelector('.guess').value);

// document.querySelector('.guess').value = 20

//REAL DOM BEGINS HERE -

let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

let secretnumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector(".number").textContent = secretnumber;

document.querySelector(".btn-again").addEventListener("click", function () {
  displayMessage("Start Guessing.....");
  document.querySelector(".score").textContent = 20;

  secretnumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = " #222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = " ";
});

document.querySelector(".btn-check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  if (!guess) {
    //WHEN THEE IS NO INPUT
    displayMessage("No number is present in input");
  } else if (guess === secretnumber) {
    //HERE THE PLAYER WINS
    displayMessage("🥳Correct number");
    document.querySelector("body").style.backgroundColor = " green";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretnumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretnumber) {
    if (score > 1) {
      displayMessage(guess < secretnumber ? "😑 Too Low" : "😑 Too High");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("😭 you lost the game !!!");
      document.querySelector(".score").textContent = 0;
    }
  }

  //THIS BELOW WRITTEN CODE IS ALSO CORRECT BUT ONLY PROBLEM IS MOST OF THE CODE IS REPEATING IN BOTH THE ELSE BLOCK.
  //   THUS TO MAINTAIN DRY PRINCIPLE WE WROTE ABOVE CODE AND COMMENTED OUT THE BELOW CODE

  //   else if (guess < secretnumber) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "😑 Too Low";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent = "😭 you lost the game !!!";
  //       document.querySelector(".score").textContent = 0;
  //     }
  //   } else if (guess > secretnumber) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "😑 Too High";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent = "😭 you lost the game !!!";
  //       document.querySelector(".score").textContent = 0;
  //     }
  //   }
});
