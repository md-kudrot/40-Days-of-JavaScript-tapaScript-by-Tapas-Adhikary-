//8. What will be the output and why ?


const person = { name: "John" };
const newPerson = person;
newPerson.name = "Doe";
console.log(person.name);

// output: Doe

// because: 
//person and newPerson both reference the same memory location.
// So when you change the name property using newPerson, it also updates person because they point to the same object.