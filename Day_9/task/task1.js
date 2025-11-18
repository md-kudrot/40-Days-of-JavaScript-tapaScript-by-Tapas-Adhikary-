{
    console.log(a); // ReferenceError (TDZ)
    console.log(b); // ReferenceError (TDZ)

    console.log(c); // undefined (var is hoisted)

    let a = 10;     
    const b = 20;    
    var c = 30;      
}
