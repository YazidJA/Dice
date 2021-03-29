const dice1 = document.querySelector("#img1");
const dice2 = document.querySelector("#img2");
const btn = document.querySelector("button");

function roll() {
  let randomNumber1 = Math.floor(Math.random() * 6) + 1;
  let randomNumber2 = Math.floor(Math.random() * 6) + 1;
  dice1.src = `images/dice${randomNumber1}.png`;
  dice2.src = `images/dice${randomNumber2}.png`;
}

btn.addEventListener("click", roll);
