// Selecting elements from the DOM
let btn = document.querySelectorAll(".box");
let rest = document.querySelector("#reset");
let result = document.querySelector("#result p");
let turn = "X";
let mode = document.querySelector("#dark");
let bod = document.querySelector("body");
let player1 = document.querySelector("#player1");
let player2 = document.querySelector("#player2");
let player1name, player2name;

askNames();


// Click event for each button
btn.forEach((element) => {
  element.addEventListener("click", () => {
    if (element.innerText == "") {
      element.innerText = turn;
      turn = turn === "X" ? "O" : "X";
    }
    btn.disabled = true;
    checkwinner();
  });
});


// Winning patterns
const winpattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
  
];


// Check for winner CODE
const checkwinner = () => {
  for (let pattern of winpattern) {
    let pos1val = btn[pattern[0]].innerHTML;
    let pos2val = btn[pattern[1]].innerHTML;
    let pos3val = btn[pattern[2]].innerHTML;
    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val == pos2val && pos2val == pos3val) {
        // ✅ Pick the name based on who won
        let winnername = pos1val === "X" ? player1name : player2name;
        result.innerText = "Congratulations " + winnername + " Wins! 🎉";
        btn.forEach((element) => {
          element.disabled = true;
        });
        return;
      }
    }
  }
};



// Reset button functionality
rest.addEventListener("click", () => {
  btn.forEach((element) => {
    element.innerText = "";
    element.disabled = false;
  });
  result.innerText = "";
  askNames();
});


// Function to ask players for their names

function askNames() {

  player1name = prompt("Enter Name of Player 1 🎮(X)");

  if (player1name == "" || player1name == null) {
    player1name = "Player 1";
  }

  player1.innerText = "Player 1: " + player1name + " (X)";

  player2name = prompt("Enter Name of Player 2 🎮(O)");

  if (player2name == "" || player2name == null) {
    player2name = "Player 2";
  }

  player2.innerText = "Player 2: " + player2name + " (O)";

}




// Prompting players for their names



// mode.addEventListener("click", () => {
//   bod.style.backgroundColor = "black";
//   bod.style.color = "white";
//   if (bod.style.backgroundColor == "black") {
//     bod.style.backgroundColor = "white";
//     bod.style.color = "black";
//   }
// });