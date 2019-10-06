// Define the array globally for potential future use
var list = []

// Apply submitted values to the array
function input_button() {
  list[0] = document.getElementById("total_input").value;
  list[1] = document.getElementById("recorded_input").value;
  list[2] = document.getElementById("scout_input").value;
  list[3] = document.getElementById("soldier_input").value;
  list[4] = document.getElementById("pyro_input").value;
  list[5] = document.getElementById("demoman_input").value;
  list[6] = document.getElementById("heavy_input").value;
  list[7] = document.getElementById("engineer_input").value;
  list[8] = document.getElementById("medic_input").value;
  list[9] = document.getElementById("sniper_input").value;
  list[10] = document.getElementById("spy_input").value;

  // Calculate and return the results to the result elements
  document.getElementById("scout_result").innerHTML = calc(list[2]);
  document.getElementById("soldier_result").innerHTML = calc(list[3]);
  document.getElementById("pyro_result").innerHTML = calc(list[4]);
  document.getElementById("demoman_result").innerHTML = calc(list[5]);
  document.getElementById("heavy_result").innerHTML = calc(list[6]);
  document.getElementById("engineer_result").innerHTML = calc(list[7]);
  document.getElementById("medic_result").innerHTML = calc(list[8]);
  document.getElementById("sniper_result").innerHTML = calc(list[9]);
  document.getElementById("spy_result").innerHTML = calc(list[10]);

  show_output()
  return
}

// Calculate the estimated total hours per class and ensure the input is correct
function calc(merc) {
  var merc_percentage = merc / list[1];
  var estimated_total = list[0] * merc_percentage;
  var estimated_total = Math.floor(estimated_total * 100) / 100; // Truncating without rounding attempt
  if (estimated_total >= 0 && estimated_total <= 99999) {
    return estimated_total;
  } else {
    return 0;
  }
}

// Hide the input field and show the output field
function show_output() {
  var x = document.getElementsByClassName("left")[0];
  x.getElementsByClassName("input")[0].style.display = "none";
  var y = document.getElementsByClassName("left")[0];
  y.getElementsByClassName("output")[0].style.display = "block";
}
function show_input() {
  var x = document.getElementsByClassName("left")[0];
  x.getElementsByClassName("output")[0].style.display = "none";
  var y = document.getElementsByClassName("left")[0];
  y.getElementsByClassName("input")[0].style.display = "block";
}
