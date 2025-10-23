

console.log("day 3")

// oparator - Symbol + - * / %
// Operands - x + y , here x and y are operands
// Expression x = 2(assignment exp) y = 6 + 5(evaluating)


// Pre-increment (++) and Post-increment (++)
let a = 5;
console.log(a++) // output: 5 [why: here at 1st 5is returned then increment to 6 . we will see the output 6 when we call a again]

console.log(a) //output: 6

console.log(++a) // output: 7 [why: here increment 1st then return ]

// Strictly ===
console.log(0 == false) // true [== only check the value]
console.log(0 === false) //false [=== check the value a data type too]

console.log(null === null) //true
console.log(undefined === undefined) //true

let person_1 = {name : "kameujjaman"};
let person_2 = {name : "kameujjaman"};
console.log(person_1 === person_2) // false [because: person_1 and person_2 terger deffarent location ]


// interesting
console.log("kamrujjaman" && undefined) // If one condition is truthy, it will return the next condition; and if it is falsy, it will return that falsy value
console.log(0 || "siam") //only true will return

console.log(!true) // output: false [it will change the condition ].

// the Nullish Coalescing Operator (??)
/*
The ?? operator checks whether the left side is null or undefined.

If it is null or undefined, it returns the right-side value.

Otherwise, it returns the left-side value

*/

console.log(null ?? "default");     // "default"
console.log(undefined ?? "default"); // "default"
console.log(0 ?? 10);                // 0   (0 is not null or undefined)
console.log("" ?? "Hello");          // ""  (empty string is not null or undefined)