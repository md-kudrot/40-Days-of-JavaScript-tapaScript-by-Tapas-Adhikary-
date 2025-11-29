// 1ta object er property arek ta object a dukanor jonno  "assign" use kora hoy

const obj1 = {
    a: 1,
    b: 2,
    c:3
}

const obj2 = {
    j :5,
    k: 6
}

console.log(Object.assign(obj1,obj2))
console.log(Object.assign([],obj2))