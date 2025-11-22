// 2. What will be the output and why?
function testClosure() {
    let x = 10;
    return function () {
        return x * x;
    };
}
console.log(testClosure()());

// output : 100
// testClosure returns an inner function that uses the variable x through closure.
// testClosure() gets the inner function, and the second () immediately executes it, producing 10 * 10 = 100.