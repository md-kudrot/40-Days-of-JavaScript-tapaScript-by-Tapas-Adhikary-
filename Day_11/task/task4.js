// 4. Write a function createMultiplier(multiplier) that returns another function to multiply numbers.

function createMultiplier(multiplier) {
    return function(number){
        console.log(multiplier * number)
    }
}

const double = createMultiplier(2)
const triple = createMultiplier(3)

double(2)
triple(3)