// Lets try with arrow function
// "use strict"
const arrow = () =>{
    console.log("Arrow outer  func: ", this)
    
    return () => {
        console.log("Arrow  inner func: ", this)
    }
}

// const outputArrow = arrow() //window (always window)
// outputArrow() //window (always window)


const food = {
    name: "mango",
    color: "yellow",
    
    getdes: () => console.log(` ${this.name} is ${this.color}`)
}

food.getdes() // undefined (because arrow function a "this" always   )


