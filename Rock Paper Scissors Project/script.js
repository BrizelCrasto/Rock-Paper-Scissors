const choices = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll(".choices button");
const userChoiceText = document.getElementById("user-choice");
const computerChoiceText = document.getElementById("computer-choice");
const winnerText = document.getElementById("winner");
const resetBtn = document.getElementById("reset");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const userChoice = button.id;
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    
    userChoiceText.textContent = `Your choice: ${userChoice}`;
    computerChoiceText.textContent = `Computer's choice: ${computerChoice}`;
    
    const winner = getWinner(userChoice, computerChoice);
    winnerText.textContent = `Winner: ${winner}`;
  });
});

resetBtn.addEventListener("click", () => {
  userChoiceText.textContent = "Your choice: -";
  computerChoiceText.textContent = "Computer's choice: -";
  winnerText.textContent = "Winner: -";
});

function getWinner(user, computer) {
  if(user === computer) return "Draw";
  if(
    (user === "rock" && computer === "scissors") ||
    (user === "paper" && computer === "rock") ||
    (user === "scissors" && computer === "paper")
  ) {
    return "You Win!";
  } else {
    return "Computer Wins!";
  }
}
