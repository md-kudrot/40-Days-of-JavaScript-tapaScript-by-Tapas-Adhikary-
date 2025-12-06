// Create a Sports constructor function that takes name and number of players as arguments and assigns them using this keyword. Then, create two sports instances and log their details

function Sports(name,numOfplyr) {
    this.name = name;
    this.numOfplyr = numOfplyr;
}

const timOne = new Sports("kk",12)
const timtwo = new Sports("mm",12)
console.log(timOne)
console.log(timtwo)