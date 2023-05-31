// JavaScript Document
// Get the necessary DOM elements
const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");
const imageWrapper = document.querySelector(".image-wrapper");
const carImages = document.querySelectorAll(".car");
const carDescs = document.querySelectorAll(".desc");

// Initialize the index of the currently displayed car
let currentIndex = 0;

// Function to update the displayed cars based on the current index
function updateDisplayedCar() {
  // Calculate the indices of the visible cars
  const firstVisibleIndex = currentIndex;
  const middleVisibleIndex = (currentIndex + 1) % carImages.length;
  const lastVisibleIndex = (currentIndex + 2) % carImages.length;

  // Show the visible cars and hide the rest
  for (let i = 0; i < carImages.length; i++) {
    if (i === firstVisibleIndex || i === middleVisibleIndex || i === lastVisibleIndex) {
      carImages[i].style.display = "block";
      carImages[i].style.transform = `translateX(${(i - currentIndex) * 33.33}%)`;
      carDescs[i].style.display = "block";
      carDescs[i].style.transform = `translateX(${(i - currentIndex) * 33.33}%)`;
    } else {
      carImages[i].style.display = "none";
      carImages[i].style.transform = "translateX(-9999px)";
      carDescs[i].style.display = "none";
      carDescs[i].style.transform = "translateX(-9999px)";
    }
  }
}

// Function to show the previous set of cars
function showPrevCars() {
  currentIndex--;

  // Wrap around to the last set if currentIndex becomes negative
  if (currentIndex < 0) {
    currentIndex = carImages.length - 3;
  }

  updateDisplayedCar();
}

// Function to show the next set of cars
function showNextCars() {
  currentIndex++;

  // Wrap around to the first set if currentIndex exceeds the number of cars
  if (currentIndex > carImages.length - 3) {
    currentIndex = 0;
  }

  updateDisplayedCar();
}

// Event listener for the "Prev" button
prevButton.addEventListener("click", showPrevCars);

// Event listener for the "Next" button
nextButton.addEventListener("click", showNextCars);

// Show the initial set of cars
updateDisplayedCar();







