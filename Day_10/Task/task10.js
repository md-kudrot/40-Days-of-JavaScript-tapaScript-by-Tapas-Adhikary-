function counter() {
    let count = 0;
    return function () {
        count--;
        console.log(count);
    };
}

const reduce = counter();
reduce();
reduce();

// output: -1
// output: -2
// The variable reduce receives the inner function returned by counter().
// When we call reduce() the first time, the closure decreases count from 0 to -1 and prints -1.
// On the second call, the closure still remembers the same count variable, so it continues from -1 to -2.
// The count variable is not redefined; it is preserved by the closure.