// 1. What will be the output and why?
const user = { name: "Alex", age: undefined };
console.log(user.age ?? "Not provided");

// output: Not provided 
// because: The ?? operator returns the right-hand side operand when the left-hand side is null or undefined. It's important to note that it only considers null and undefined as "nullish" values.