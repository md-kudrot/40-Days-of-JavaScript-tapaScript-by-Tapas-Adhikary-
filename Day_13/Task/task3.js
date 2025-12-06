// 3. Can you explain what is the problem here and fix the issue to log the correct name?


const obj = {
    name: "Tom",
    greet: function () {
        console.log(`Hello, ${this.name}!`);
    },
};

// const greetFn = obj.greet; 
// greetFn();

// we can solve this problem by call this method  
const greetfn = obj.greet.bind(obj)
greetfn()
