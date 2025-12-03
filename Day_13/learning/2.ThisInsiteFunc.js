// "use strict"
function normalFunc() {
    console.log("The value of 'this' keyword is in a normal function ", this)
}

normalFunc() //Window 

function outer() {
    console.log("Outer func: ", this)
    
    return function() {
        console.log("inner func: ", this)
    }
}

const output = outer() //output1: window (without strict moad )
//  output2: undefined (with strict moad) 

output()  //output1: window (without strict moad )
//  output2: undefined (with strict moad) 


