// 1. What will be the output of the following code and why?

function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    };
}
const counter = outer();
counter();
counter();

// output: 1
// output: 2
// The variable counter receives the inner function returned by outer().
// When we call counter() the first time, the closure increases count from 0 to 1 and prints 1.
// On the second call, the closure still remembers the same count variable, so it continues from 1 to 2.
// The count variable is not redefined; it is preserved by the closure.