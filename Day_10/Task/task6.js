// What will be the output and why?

console.log(a);
let a = 10;

// output : Uncaught ReferenceError: Cannot access 'a' before initialization

// beacuse : Variables declared with let are hoisted, but not initialized.Before the line where let a = 10 runs, a is in the Temporal Dead Zone (TDZ).


