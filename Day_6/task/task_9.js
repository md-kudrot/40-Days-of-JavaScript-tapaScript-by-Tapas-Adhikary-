function kk(name , callback){
    callback(name)
}

function fullName(n){
    console.log("MD " + n)
}

kk("Kamrujjaman", fullName)