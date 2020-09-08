const askAge = () => {
  const age = prompt("What is your age?");
  console.log(age);
  console.log(age * 2);
};

const doubleAge = (age) => {
  const doubledAge = age * 2;
  return doubledAge;
};

const tripleAge = (age) => {
  const tripledAge = age * 3;
  return tripledAge;
};

const handleSubmit = (e) => {
  e.preventDefault();
  const age = document.getElementById("age").value;

  // Print the return value
  document.getElementById("doubledAge").innerHTML = doubleAge(age);
  document.getElementById("tripledAge").innerHTML = tripleAge(age);
};
