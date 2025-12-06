// 7. What will be the output of the following code and why?

const person = {
  name: "Charlie",
  sayHello: function () {
    console.log(this.name); // Charlie // because: this refers to obj because the function is called as a method of obj.
  },
  sayHelloArrow: () => {
    console.log(this.name); // undefined // because arrow functions do NOT have their own 'this', they inherit it from the surrounding scope (here, global scope)
  },
};

person.sayHello();
person.sayHelloArrow();

