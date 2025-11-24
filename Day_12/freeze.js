// object er property ke constant korar jonno "freeze" use kora hoy

const emp = {
    sal : 1000
}

Object.freeze(emp)

emp.sal = 10;

// console.log(emp) //1000

// console.log(Object.isFrozen(emp)) //true


// jodi property value change korte cai kintu delete ba add korte caina tahole "seal" property use korte hbe

const dept = {
    name : "Kamrujjaman"
}

Object.seal(dept)

delete dept.name // we can't delete any property for "seal" property

dept.name = "kk" // we can reassine value

console.log(dept)


// kono property oi object er modde ase kina ta dekhar jonno "hasOwn" method use kora hoy

console.log(Object.hasOwn(dept,"name"))