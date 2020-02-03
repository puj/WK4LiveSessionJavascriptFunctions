// 1b. Create a function which doubles the age and returns it
const doubleAge = (age) => {
    // Function body

    // 1a. We'll double the age and console.log it
    const doubledAge = +age * 2;
    return doubledAge;
};

const tripleAge = (age) => {
    // Function body
    const tripledAge = +age * 3;
    return tripledAge;
}

const clicked = () => {
    // 1. Use Prompt/user input
    const userAge = prompt("What is your age?");

    // Check if it is odd or even

    // Initialize the variable to the original age
    let modifiedAged = userAge;
    console.log(`Original Age: ${userAge}`);

    if (+userAge % 2 == 0) {
        // a. If even, double the original age
        modifiedAged = doubleAge(userAge);
    } else {
        // b. If odd, triple the age
        modifiedAged = tripleAge(userAge);
    }
    console.log(`Modified Age: ${modifiedAged}`);

    // Print the return value
    document.getElementById("age").innerHTML = modifiedAged;

}