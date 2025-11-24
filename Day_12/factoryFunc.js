function factoryFunc(name , age) {
    return {
        name ,
        age,
        show() {
            console.log(this.name)
        }
    }
}

const kk = factoryFunc("kk", 45)
const mm = factoryFunc("MM", 35)


console.log(kk)
console.log(mm)

console.log(kk.show())