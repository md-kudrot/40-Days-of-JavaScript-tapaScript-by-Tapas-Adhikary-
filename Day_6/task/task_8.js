function parent(name , callback){
    console.log(callback)
    return function(){
        console.log(name)
    }
}

const kk = parent("kk","mm")
console.log(kk())