console.log(a); // Output: undefined
var a = 5;
console.log(a); // Output: 5


console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;


greet(); // Output: Hello World!

function greet() {
  console.log("Hello World!");
}


sayHi(); // TypeError: sayHi is not a function

var sayHi = function() {
  console.log("Hi!");
};
