let x = "Global";

function outer() {
    let x = "Outer";

    function inner() {
        let x = "Inner";
        console.log(x);
    }

    inner();
}

outer();

// Output: Inner
// Because: inner function find the x variable in his own scope.  x is redefine "Inner" on inner functions scope. so the output is Inner 