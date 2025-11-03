// define a function

function kk(){
    console.log("this is kk function")
}

// call or Invoke a function
kk();

// function as a expression

let funcVariable = function (){
    console.log("this is function expression")
}

// console.log(funcVariable) // function body

funcVariable()


//  Parameter and Argument and return

function adding(a,b){
    let result = a + b
    return result; 
}

let returnResult = adding(5,6);

function multiple(x){
    return 2 * x ;
}

console.log(multiple(returnResult))

//Rest Parameter
function calCUlation(a,b,...rest){
    console.log("This is the output of rest Parameter",a,b,rest)// rest parameter create a array and store extra value without the value of a,b.
}

calCUlation(1,2,3,5,87,7)


// Nested function
function outerFunc(){
    console.log("outer func")

    return function inner(){
        return ("inner func")
    }
}

let retFunc = outerFunc()

console.log(retFunc())


// callback function

function goo(fuc){
    console.log("this is goo")
    fuc()

}

const pp = function(){
    console.log("this is kk")
}

goo(pp);



//higher order fuction

function returnFunc(){
    return function(){
        return ("returnfunc return me")
    }
}

const acceptFunc = returnFunc();

console.log(acceptFunc())

// arrow function

const vv = () => console.log("this is arrow function")

console.log(vv());

// IIFE (Immediately Invoked function Expression)
(function() {
        console.log("hello")
})();