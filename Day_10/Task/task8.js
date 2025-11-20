// What will be the output and explain the output?

let message = "Hello";

function outer() {
    let message = "Hi";

    function inner() {
        console.log(message);
    }

    inner();
}

outer();

// The output is Hi because the inner function will check for the variable message in its own scope. When it doesn't find message there, it will use the one from the outer function’s scope, where message is redefined as Bob. So the output is Hi.