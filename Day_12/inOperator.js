// amra jokon kono object er modde kono property ase kina ta check korbo tokon "in" property use korle code better hbe, dot(.) use korle code break hbe

// code demo using dot(.)
console.log("The output using dot(.)")
// in this way this will break
const person = {
    name: "kamrujjaman",
    student: undefined
}

if (person.student) {
    console.log("This property is there")
} else {
    console.log("there is no property")
}


// code demo using "in" property
console.log("The output using in property")
const Employe = {
    name: "kamrujjaman",
    student: undefined
}

if ("student" in Employe) {
    console.log("This property is there")
} else {
    console.log("there is no property")
}

