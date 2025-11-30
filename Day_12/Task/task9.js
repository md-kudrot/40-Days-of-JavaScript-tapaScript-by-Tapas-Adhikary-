// 9. What’s the best way to deeply copy a nested object? Expalin with examples

// answer:
// structuredClone() is  the best way to deeply copy a nested Object

const obj1 = {
    name : "kk",
    address: {
        city: "Dhaka"
    }
}
 
const obj2 = structuredClone(obj1); //Deep Copy

// const obj2 = Object.assign(obj1); // Shallow Copy

console.log(obj2)

obj1.address.city = "Dinajpur";

console.log(obj1.address.city)
console.log(obj2.address.city)