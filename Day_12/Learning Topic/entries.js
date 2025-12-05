const myObj = {
    name : "kamrujjaman",
    age : 12
}

// convert the obj to arr
const myArr = Object.entries(myObj)

console.log(myArr)


//Object.entries() returns an array of key–value pairs from an object

const entries = new Map([
    ["foo","bar"],
    ["baz", 42]
])

const objEntries = Object.fromEntries(entries)
// console.log(objEntries)