// Explicit Binding - call , apply, bind

// call()
// the use of "call" method

function greeting() {
    console.log(`Hello, ${this.name} and Hi ${this.anotherName}`)
}

const name = {
    name: "MD Kamrujjaman",
    anotherName: "MD Kudrot"
}

// join the function with name object . so that we need to use "call" method

greeting.call(name, "kk")

// The way to pass peramiter useing "call" method

const hobby = function (hobby1, hobby2) {
    console.log(this.name, "loves", hobby1, hobby2)
}

const persone = {
    name: "KK"
}

hobby.call(persone, "coding", "learnning")

// apply()
// lets try "apply" method for pass a array as argument

const hobbyArr = ["listing song", "Game play"]

hobby.apply(persone, hobbyArr)

// bind()

const newHobby = function (hobby1, hobby2) {
    console.log(this.name, "loves", hobby1, hobby2)
}

const officer = {
    name : "Bob"
}

const newFunc = newHobby.bind(officer, "dancing" , "foodball") //it will return newHobby fuc with output

// console.log(newFunc) //  newHobby 

newFunc() // Bob loves dancing foodball

// constractor function with "this" keyword

function Animal(name , catagory) {
    this.name = name;
    this.animalName = catagory ;

    this.log = function() {
        return console.log(`the name of the animal is ${name} and catagory is ${catagory}`);
    }

}


const tom = new Animal("tom" , "cat")

tom.log();