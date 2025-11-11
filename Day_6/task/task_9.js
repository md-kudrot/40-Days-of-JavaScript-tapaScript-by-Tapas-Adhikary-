// function kk(name , callback){
//     callback(name)
// }

// function fullName(n){
//     console.log("MD " + n)
// }

// kk("Kamrujjaman", fullName)

const input = [10, 50, 20, 0, 30]
const output = []

while (input.length > 0) {
    let minIndex = 0
    for (let i = 1; i < input.length; i++) {
        if (input[i] < input[minIndex]) {
            minIndex = i
        }
    }
    output.push(input[minIndex])
    input.splice(minIndex, 1)
}

console.log(output)