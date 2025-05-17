const bingo_squares_array = [
                            {title:"2+ Mini-Sentries", description:"2 or more mini-sentries on the same team"},
                            {title:"3+ Players AFK", description:"3 or more players afk on the same team"},
                            {title:"3+ Snipers or Spies", description:"3 or more players on sniper or spy on the same team"},
                            {title:"Hackusations", description:"Somebody calls somebody else a cheater without merit"},
                            {title:"Australium", description:"Somebody has an australium or golden weapon"},
                            {title:"Unusual", description:"Somebody has an unusual"},
                            {title:"Earbuds", description:"Somebody has earbuds equipped"},
                            {title:"Medic Drops", description:"A medic on either team dies with full ubercharge"},
                            {title:"Child in Voice Chat", description:"A young child speaks in voice chat"},
                            {title:"Killbind During Taunt", description:"Somebody killbinds during a taunt"},
                            {title:"Death Beside Health Pack", description:"You or somebody else dies just before getting a health pack"},
                            {title:"Non-English", description:"Somebody in chat in another language"},
                            {title:"Gibus", description:"Somebody wearing a gibus"},
                            {title:"Gibus + Pyrovision", description:"Somebody wearing both a gibus and pyrovision goggles"},
                            {title:"Hacker", description:"An actual cheater with a player in control is on the server"},
                            {title:"Bot", description:"A bot not directly controlled by somebody is on the server"},
                            {title:"Stolen Health Pack", description:"You or somebody else steals a health pack from another player"},
                            {title:"Music Over Mic", description:"Somebody is spamming music through their microphone"},
                            {title:"Mad in Chat", description:"Somebody mad typing in chat"},
                            {title:"No Medic", description:"Nobody is playing medic on your team"},
                            {title:"Offensive Name", description:"Subjective. Your choice"},
                            {title:"Offensive Spray", description:"Subjective. Your choice"},
                            {title:"Phlog Pyro", description:"Somebody is playing pyro with the phlogistinator"},
                            {title:"Taunt Kill", description:"You or somebody else gets a kill with a kill taunt"},
                            {title:"Pre-game Dancing", description:"One or more players using dance taunts in setup"},
                            {title:"Pyro Doesn't Airblast", description:"A pyro that never airblasts"},
                            {title:"Spy Top of Team", description:"Somebody playing spy tops the leaderboard"},
                            {title:"Top of Team", description:"Get top of the team at the end of a winning round"},
                            {title:"Top 3 MVP", description:"Get top 3 on your team at the end of a winning round"},
                            {title:"Taunted in Killcam", description:"Get taunted after being killed"},
                            {title:"Teleporter Facing Wrong Way", description:"An engineer's teleporter exits facing the wrong direction"},
                            {title:"Tryhard with Pocket", description:"Demoman with kritz, vacc heavy, etc"},
                            {title:"Scunt", description:"Neon painted scout. Doesn't have to be good"},
                            {title:"Vote Kick", description:"Someone starts a votekick"},
                            {title:"Bug/glitch", description:"Experience a bug or glitch"},
                            {title:"Backcap", description:"Somebody sneaks behind and caps the next point"},
                            {title:"Friendly Team", description:"Either team goes fully friendly and stops attacking"},
                            {title:"A Fun Game", description:"Have a fun game"},
                            {title:"5x Speed on Objective", description:"The objective gets pushed or capped at 5 times speed"},
                            {title:"Strange Level Up", description:"Somebody's strange levels up"},
                            {title:"Autobalanced", description:"Get moved to the other team"},
                            {title:"3+ Dominations", description:"Get 3 or more dominations at once"},
                            {title:"Get bled", description:"Get hit with the bleed effect"},
                            {title:"Get milked", description:"Get hit with the milk effect"},
                            {title:"Get ubered", description:"Get ubered by a medic"},
                            {title:"Environmental Kill", description:"You or somebody else gets an environmental kill"},
                            {title:"Neon Painted", description:"Somebody has neon painted cosmetics"},
                            {title:"Going the Wrong Way", description:"Somebody goes the wrong way"},
                            {title:"Pub Push", description:"The attacking team only focuses on the objective at the end of the round"},
                            {title:"Spawncamping", description:"Either team successfully spawncamps"},
                            {title:"Meme Name", description:"Somebody has a meme name"},
                            {title:"Random Crit Kills 3+", description:"Somebody gets a random crit that kills 3 or more players"},
                            {title:"Cow Mangler", description:"Somebody is using the Cow Mangler 5000"},
                            {title:"Rocket Jumper", description:"Somebody is using the rocket jumper"},
                            {title:"Demoknight", description:"Somebody is playing demoman with a shield equipped"},
                            {title:"Heavy Pushed by Cart", description:"A heavy uses the cart to move"},
                            {title:"Hoovy", description:"A friendly heavy"},
                            {title:"Medic Heals Enemy Spy", description:"A medic on either team heals a disguised spy from the opposing team"},
                            {title:"Medic Ubers Alone", description:"A medic ubers without a teammate around"},
                            {title:"Uber Chaining", description:"2 or more medics chain ubercharges using the ubersaw"},
                            {title:"Pocket Medic", description:"A medic that only heals one person"},
                            {title:"Machina Collateral", description:"You or somebody else gets the machina penetration sound to play"},
                            {title:"Huntsman", description:"Somebody else is using the huntsman"}
                            ]
// Sources
// https://charlesstover.github.io/tf2-bingo/
// https://www.reddit.com/r/tf2/comments/3ym6s3/i_made_a_yet_another_bingo_card_generator_but/
// https://codepen.io/unitgon/pen/xZRVdV


// Randomized int function with min and max values
function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Generate a new 9-digit seed
function generateSeed() {
  seed = randInt(100000000, 999999999);
  return seed;
}


// Replace the old seed with a user provided one
// Comes as a string apparently
function inputSeed(seed) {
  let seedInt = Number(seed);
  randomize(seedInt);
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
  let freeSpace = document.getElementById("12");
  let freeSpaceDescription = document.getElementById("tooltip-12");
  if (freeSpace.innerHTML == "Free Space") {
    freeSpaceEnabled(false);
    freeSpace.innerHTML = freeSpaceValue.valueOf();
    freeSpaceDescription.innerHTML = freeSpaceDescriptionValue.valueOf();
  } else if (freeSpace.innerHTML !== "Free Space") {
    freeSpaceEnabled(true);
    freeSpace.innerHTML = "Free Space";
    freeSpaceDescription.innerHTML = "Free Space";
  }
  // Do last as free space may be enabled and should not be toggled
  toggleColor(12);
}


// Toggle clicked square colour for user marking
// by adding or removing the .checked class to the clicked element
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


// Pick a random index for all 25 slots and apply
function randomize(seed) {
  let size = bingo_squares_array.length;
  for (let i = 0; i < 25; i++) {
    let randomIndex = (seed + i) % size
    // Set all slots aside from the free space
    if (i !== 12) {
      document.getElementById(i).innerHTML = bingo_squares_array[randomIndex].title;
      document.getElementById(`tooltip-${i}`).innerHTML = bingo_squares_array[randomIndex].description;
    // If it's the free space, store it's random selection instead
    } else if (i == 12) {
      freeSpaceValue = bingo_squares_array[randomIndex].title;
      freeSpaceDescriptionValue = bingo_squares_array[randomIndex].description;
      document.getElementById(`tooltip-${i}`).innerHTML = "Free Space";
    }
  }
}


// For page load only
function init() {
  seed = generateSeed();
  randomize(seed);
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
