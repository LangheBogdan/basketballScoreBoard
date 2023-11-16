const homeScore = document.getElementById("homeScore");
const guestScore = document.getElementById("guestScore");

function addToTotal(valueToAdd, team) {
  let homeTotal = parseInt(homeScore.textContent);
  let guestTotal = parseInt(guestScore.textContent);

  if (team === "home") {
    homeScore.textContent = homeTotal + valueToAdd;
  } else if (team === "guest") {
    guestScore.textContent = guestTotal + valueToAdd;
  }
}

// event listeners to the buttons
document
  .getElementById("homeAddOnePoint")
  .addEventListener("click", function () {
    addToTotal(1, "home");
  });

document
  .getElementById("guestAddOnePoint")
  .addEventListener("click", function () {
    addToTotal(1, "guest");
  });

document
  .getElementById("homeAddTwoPoints")
  .addEventListener("click", function () {
    addToTotal(2, "home");
  });

document
  .getElementById("guestAddTwoPoints")
  .addEventListener("click", function () {
    addToTotal(2, "guest");
  });

document
  .getElementById("homeAddThreePoints")
  .addEventListener("click", function () {
    addToTotal(3, "home");
  });

document
  .getElementById("guestAddThreePoints")
  .addEventListener("click", function () {
    addToTotal(3, "guest");
  });
