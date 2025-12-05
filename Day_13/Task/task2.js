// 2. What is the problem here? Fix it to log the correct name and explain the fix

const user = {
    name: "tapaScript",
    greet: () => {
        console.log(`Hello, ${this.name}!`);
    },
};

user.greet();
// Output: Hello, undefined
// Because:
/* 
Arrow functions do not have their own this.
Instead, they inherit this from their outer (lexical) scope.
Since the greet method is written as an arrow function, it does NOT bind this to the user object.
Its this comes from the global scope, where there is no name, so it prints undefined.
*/