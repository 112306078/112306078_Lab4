// Add event listeners to all drum buttons for mouse clicks
const drumButtons = document.querySelectorAll(".drum");
drumButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const buttonInnerHTML = this.innerHTML;
    playDrumSound(buttonInnerHTML);
    animateButton(buttonInnerHTML);
  });
});

// Add event listener for keyboard presses
document.addEventListener("keydown", function (event) {
  playDrumSound(event.key);
  animateButton(event.key);
});

// Function to play drum sound based on key or button
function playDrumSound(key) {
  switch (key) {
    case "w":
      new Audio("sounds/tom-1.mp3").play();
      break;
    case "a":
      new Audio("sounds/tom-2.mp3").play();
      break;
    case "s":
      new Audio("sounds/tom-3.mp3").play();
      break;
    case "d":
      new Audio("sounds/tom-4.mp3").play();
      break;
    case "j":
      new Audio("sounds/snare.mp3").play();
      break;
    case "k":
      new Audio("sounds/crash.mp3").play();
      break;
    case "l":
      new Audio("sounds/kick-bass.mp3").play();
      break;
    default:
      console.log("Invalid key: " + key); // For debugging invalid key presses
  }
}

// Function to animate the button
function animateButton(key) {
  const activeButton = document.querySelector("." + key);
  if (activeButton) {
    activeButton.classList.add("pressed");

    // Remove the "pressed" class after 100ms
    setTimeout(() => {
      activeButton.classList.remove("pressed");
    }, 100);
  }
}