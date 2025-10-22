// task 3
let fruit = "mango"
let vegetable = "carrots"
let add = (fruit = vegetable)
console.log(add) //carrots

var mm = "kamrujjaman";
console.log(mm)//kamrujjaman
var mm = "kudrot";//kudrot
console.log(mm)
// there is no problem when we use var

// let come for solve this problem

// let kk = "kamruj" //Uncaught SyntaxError: Identifier 'kk' has already been declared (at script.js:14:5)
// console.log(kk   )
let kk = "jaman"
console.log(kk)

// but we can reassain the value of let
 let h = "hello"
 h = "hi"
 console.log(h) //hi

//  const
// we cant change the value of const variable

const friend = "Rayhan"
// friend = "tony" //Uncaught TypeError: Assignment to constant variable.
console.log(friend)

//we can create multiples variable
// let age, city, villege;

/* data type
primitive data type:
    - string 
    - number
    - boolean
    - undefined
    - null
    - bigint
    - symbol
Non- Primitive data type:
    - object
    - array
    - function
*/

// HW of day 2

// task 1: 
let name = "kamrujjaman";
let age = 20;
let isStudent = true;
let favoriteProgrammingLanguage = "JS"
// tast 2
console.log(name,age,isStudent,favoriteProgrammingLanguage)

// task3(line number 1)

// task4:
const phone ={
    phoneName : "iphone",
    company: "apple",
    price: 100000,
    isPossibleToBuy: false
}

const arr = [1,2,3,3,4,4,4,phone]