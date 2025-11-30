//  6. What is the difference between Object.keys() and Object.entries()? Explain with examples


// Object.keys() return an array of all the keys(property name) of an object

// code example:
const user = {
    name: "Kamrujjaman",
    age: 20
}

// console.log(Object.keys(user))

// Object.entries() returns an array of key–value pairs from an object.

console.log(Object.entries(user))

// const arr = Object.entries(user)
// console.log(arr[1])