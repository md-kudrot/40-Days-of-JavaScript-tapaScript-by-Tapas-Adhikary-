// 6. Can you attach the car1's describe() method to car2 object? Give all possible solutions that you can think of

const car1 = {
    brand: "Audi",
    model: "A8",
    describe: function () {
        console.log(`This car is a ${this.brand} ${this.model}.`);
    },
};

const car2 = {
    brand: "BMW",
    model: "X1",
};

car1.describe.call(car2)

const describeFunc = car1.describe
// console.log(describeFunc)

describeFunc.call(car2)
describeFunc.apply(car2)
const storeDes =  describeFunc.bind(car2)
storeDes()