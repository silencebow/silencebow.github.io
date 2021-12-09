function class_selection(class_) {
  // Classes to select from when set to random class
  var classes = ['scout', 'soldier', 'pyro', 'demoman', 'heavy', 'engineer', 'medic', 'sniper', 'spy'];
  // Pick a class if set to random
  if (class_ == 'any') {
    let random_class = Math.floor(Math.random() * classes.length);
    var class_ = classes[random_class];
  }
  // Make the class variable an object
  class_object = window[class_];

  // Weapon slots to iterate through
  var slots = ['primary', 'secondary', 'melee', 'PDA'];
  // Loop through each weapon slot
  for (const slot of slots) {
    // If the class doesn't have a PDA, hide the slot
    if (class_object[slot] === null) {
      document.getElementById('PDA-slot').style.display = 'none';
    }
    // If it does
    else {
      // Get a random index from the length of the slot array
      let random_weapon = Math.floor(Math.random() * class_object[slot].length);
      // Get a random weapon with the random index
      let weapon_name = class_object[slot][random_weapon]
      // Insert the weapon name
      document.getElementById(slot + '-name').innerHTML = 'The ' + weapon_name;
      // Insert the weapon image
      document.getElementById(slot + '-image').src = 'assets/pages/tf2loadoutgenerator/'
                                                      + class_ + '/' + slot + '/' + weapon_name + '.png';
      document.getElementById('class-image').src = 'assets/pages/tf2loadoutgenerator/'
                                                      + class_ + '/' + class_ + '.png';
      // Display the weapon slot
      document.getElementById(slot + '-slot').style.display = 'inherit';
    }
  }
}

