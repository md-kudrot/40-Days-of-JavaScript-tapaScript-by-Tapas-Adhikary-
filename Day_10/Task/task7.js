// Where is the age variable accessible?

function showAge() {
    let age = 25;
    console.log(age);
}

console.log(age);

// answer: The variable age is declared inside the showAge function using let, so it exists only within that function’s scope. It cannot be accessed outside the showAge function.