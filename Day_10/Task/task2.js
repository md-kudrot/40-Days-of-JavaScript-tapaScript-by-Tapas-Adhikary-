// 2. What is the mistake in the code below?

let total = 0; // Global, bad practice

function add(num) {
    total += num;
}

add(5);
add(10);
console.log(total);



// The code works, but the mistake is relying on a global mutable variable (total). That creates a hidden dependency and side effect: any code anywhere can change total, which makes the function hard to reason about and easy to break (race conditions, surprising interactions, harder testing).