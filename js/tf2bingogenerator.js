// Global variables
// const bingo_squares_array
const freeSpace = document.getElementById("12");
const freeSpaceDescription = document.getElementById("tooltip-12");
var freeSpaceValue = null
var freeSpaceDescriptionValue = null


function prng(seed) {
  return function() {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
}


function shuffle(array, seed=Math.random()) {
  const random = prng(seed);
  for (let i = array.length - 1; i >= 1; i--) {
      const j = Math.floor(random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return [array, seed];
}


function populate(array) {
  let freeSpace = 12
  for (let i = 0; i < 25; i++) {
    if (i !== freeSpace) {
      document.getElementById(i).innerHTML = array[i].title;
      document.getElementById(`tooltip-${i}`).innerHTML = array[i].description;
    // Store its data instead
    } else if (i == freeSpace) {
      freeSpaceValue = array[i].title;
      freeSpaceDescriptionValue = array[i].description;
      document.getElementById(`tooltip-${i}`).innerHTML = "Free Space";
    }
  }
}


function populateFreeSpace() {
  freeSpace.innerHTML = freeSpaceValue.valueOf();
  freeSpaceDescription.innerHTML = freeSpaceDescriptionValue.valueOf();
}


// Replace the old seed with a user provided one
// Convert to float and parse as int
function inputSeed(seed) {
  seed = Number("0." + seed);
  let duplicated_bingo_squares_array = JSON.parse(JSON.stringify(bingo_squares_array));
  let [shuffled_bingo_array] = shuffle(duplicated_bingo_squares_array, seed);
  populate(shuffled_bingo_array);
  if (!freeSpaceEnabled()) {
    populateFreeSpace();
  }
}


// Why is a simple boolean toggle so tedious...
// Assign the bool for calling later
const freeSpaceEnabled = freeSpaceBooleanStorage()
function freeSpaceBooleanStorage(initialValue=true) {
    let storedValue = initialValue;
    return function(value) {
        if (arguments.length === 0) {
            return storedValue; // Return the stored value if no argument is passed
        } else {
            storedValue = Boolean(value); // Set the stored value if an argument is passed
        }
    };
}


// Change the free space to a real space when called by user
function toggleFreeSpace() {
  if (freeSpace.innerHTML == "Free Space") {
    freeSpaceEnabled(false);
    populateFreeSpace();
  } else if (freeSpace.innerHTML !== "Free Space") {
    freeSpaceEnabled(true);
    freeSpace.innerHTML = "Free Space";
    freeSpaceDescription.innerHTML = "Free Space";
  }
  // Do last as free space may be enabled and should not be toggled
  toggleColor(12);
}


// Toggle clicked square colour for user marking with .checked css class
function toggleColor(id) {
  let element = document.getElementById(id);
  let checked = element.classList.contains("checked");
  if (!checked) {
    element.classList.toggle("checked");
  } else if (checked) {
      // Need to disable toggling for the free space while free space is enabled
      if (!(id == 12 && freeSpaceEnabled())) {
        element.classList.toggle("checked");
      }
  }
}


// For page load only
function init() {
  let duplicated_bingo_squares_array = JSON.parse(JSON.stringify(bingo_squares_array));
  let [shuffled_bingo_array, seed] = shuffle(duplicated_bingo_squares_array);
  populate(shuffled_bingo_array);
  // Convert to int for user input
  seed = String(seed).slice(2)
  // Populate the seed input box with the generated seed
  document.getElementById("seed").value = seed;
  // Add event listeners to each bingo space for user marking
  let squares = document.getElementsByClassName("space");
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", (event) => toggleColor(i));
  }
}


// Initialize
init();
