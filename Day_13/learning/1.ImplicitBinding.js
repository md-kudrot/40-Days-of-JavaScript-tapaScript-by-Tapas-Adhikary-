// Implicit Binding (Object Methods)

const person = {
    firstName : "MD",
    lastName : "Kamrujjaman",

    returnThis : function() {
        return console.log(this)
    },

    fullName : function() {
        return console.log(`${this.firstName} ${this.lastName}`)
    }
}

person.returnThis()
person.fullName()



// another example :

const tom = {
    name : "tom",
    age : 5
}

const jerry = {
    name : "jerry",
    age : 3
}

function fullNameInf(obj) {
    obj.fullNmIn = function() {
        console.log(`Name is ${this.name} and age is ${this.age}`)
    }
    console.log(obj)
}

fullNameInf(tom)

tom.fullNmIn()

fullNameInf(jerry)

jerry.fullNmIn()