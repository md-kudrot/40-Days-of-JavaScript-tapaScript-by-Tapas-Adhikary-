// 4. What is the problem with the following code? Why isn't it logging the name correctly?


const user = {
    name: "Alex",
    greet: function () {
        function inner() {
            console.log(`Hello, ${this.name}!`);
        }
        inner();
    },
};

user.greet();

/* answer:
    The problem is that the inner() function is a regular function, and when it is called as inner() , its this value becomes the global object, not the user object. So the global object does not have a name property, this.name  is undefined
*/
