const user = {
    name : "kamrujjaman",
    "is good" : true,
    "age" : 20 

}

console.log(user.name)
console.log(user["is good"])

// if we want to delete any property

delete user["is good"]

console.log(user)

const someKey = "age";

console.log(user[someKey])


const car = prompt("Enter Your car name = ")

const carObj = {
    [car] : 5
}

console.log(carObj)