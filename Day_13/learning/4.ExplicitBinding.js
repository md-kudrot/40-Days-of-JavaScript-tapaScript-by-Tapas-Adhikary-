// Explicit Binding - call , apply, bind

// the use of "call" method

function greeting() {
    console.log(`Hello, ${this.name} and Hi ${this.anotherName}`)
}

const name = {
    name: "MD Kamrujjaman",
    anotherName: "MD Kudrot"
}

// join the function with name object . so that we need to use "call" method

greeting.call(name)