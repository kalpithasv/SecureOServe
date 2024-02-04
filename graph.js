// script.js
document.addEventListener("DOMContentLoaded", function() {
  // Set the initial credit score value
  const initialScore = 500;
  setCreditScore(initialScore);
  
  // Set the pointer rotation based on the initial credit score
  rotatePointer(initialScore);
});

function setCreditScore(score) {
  const creditScoreElement = document.getElementById("creditScore");
  creditScoreElement.textContent = score;
}

function rotatePointer(score) {
  // Calculate the rotation angle based on the score
  const maxScore = 1000;
  const rotationAngle = (score / maxScore) * 180 - 90;
  
  // Rotate the pointer
  const pointerElement = document.getElementById("pointer");
  pointerElement.style.transform = `translateX(-50%) rotate(${rotationAngle}deg)`;
}
