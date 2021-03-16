var randomNumber1 = Math.floor(Math.random() * 6 + 1); //Creates a random integer between 1-6
var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var randomDiceImage1 = "images/dice" + randomNumber1 + ".png"; //Creates random dice image source
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[0].src = randomDiceImage1; //Changes the left dice's image
document.querySelectorAll("img")[1].src = randomDiceImage2; //Changes the right dice's image

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "🚩 Player 1 Wins"; //Determines the winner by changing the h1 text
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").textContent = "Player 2 Wins 🚩";
}
else {
  document.querySelector("h1").textContent = "Draw 😈";
}
