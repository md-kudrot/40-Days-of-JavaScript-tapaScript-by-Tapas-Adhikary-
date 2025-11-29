
// use of  reduce() 

const arr = [10,20,30]

const totalScore = arr.reduce((tatal, count) =>{
    console.log(`${tatal}  and ${count}`)
    return tatal + count
},0)

console.log(totalScore)

