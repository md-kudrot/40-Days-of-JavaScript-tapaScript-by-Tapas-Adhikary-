// if we create constractor function we can see the name of this object
function Car(name , model) {
    this.name = name ;
    this.model = model;
}

const bmwCar = new Car("BMW", "M774")
console.log(bmwCar)

const TMW = new Car("TMW","T543");
console.log(TMW)


// there is another way to create object 

const person = new Object();

person.name = "kamrujjaman"
person.age = 50

console.log(person)