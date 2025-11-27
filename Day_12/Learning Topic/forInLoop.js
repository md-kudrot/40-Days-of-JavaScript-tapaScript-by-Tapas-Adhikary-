console.log("hello")

// kono object er modde jotogula property er value ase segula dekhar jonno for in loop use  kora jay

// for (let key in document){
//     // console.log(document[key])
// }

let person = {
    name : "kamrujjaman",
    age : 20,
}

console.log(Object.keys(person)) // ei poddhotite  object ke array te rupantor kora jay

let objArr = Object.keys(person)

console.log(objArr[1])