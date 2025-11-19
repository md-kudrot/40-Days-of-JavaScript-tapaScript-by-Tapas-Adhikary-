// 1. What will be the output of the following code and why?


let user = "Alice";

function outer() {
    function inner() {
        console.log(user);
    }
    let user = "Bob";
    inner();
}

outer();    

// The output is Bob because the inner function will check for the variable user in its own scope. When it doesn't find user there, it will use the one from the outer function’s scope, where user is redefined as Bob. So the output is Bob.