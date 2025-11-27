// 2. What will happen if we try to modify a frozen object?

const obj = Object.freeze({ a: 1 });
obj.a = 2;
console.log(obj.a);

// output: 1
// because: when we use "freeze" property in a object then we can't change any propertys value of this object 