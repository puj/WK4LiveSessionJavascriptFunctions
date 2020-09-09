// Executing a function == invoking == calling

const doubleAge = (age) => {
  return age * 2;
};

const tripleAge = (age) => {
  return age * 3;
};

// Input : accepts an age number value
// Output: returns true/false
const isAgeOdd = (age) => {
  if (age % 2 === 0) {
    // Even
    return false;
  } else {
    // Odd
    return true;
  }
};

const handleSubmit = (event) => {
  // This prevent page reload
  event.preventDefault();

  // Get the age value from the form input
  const age = document.getElementById('age').value;

  // Do the age calculations
  const doubledAge = doubleAge(age);
  const tripledAge = tripleAge(age);

  document.getElementById('doubleAge').innerHTML = doubledAge;
  document.getElementById('tripleAge').innerHTML = tripledAge;
};
