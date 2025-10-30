// for loop
// A for loop is best when we know exactly how many times we need to run the block the code.
// for (initialization; condition ; update){

// }

// for(let count = 1; count <= 10; count++){
//     console.log("Iteration",count)
// }

let total = 0;
for(let i = 0 ; i <= 100; i++){
    if(i%2 === 0){
        total = total + i;
    }
}
console.log(total)

let language = "Bengali";

for(let i = 0 ; i < language.length; i++){
    console.log(language.charAt(i))
}

//Nested Loop

for(let i = 1 ; i <= 3 ; i++){
    for(let u = 1 ; u <= 3 ; u++){
        console.log("Row",i , "col",u)
        //continue utill the condition flase
    }
    //after completd all iteration of inner loop then main loop iteration start 
}

// Break and Continue

for(let k = 0 ; k <= 5 ; k++){
    if(k === 3){
        break;
    }
    // console.log(k)
}

for(let y = 0 ; y <=10 ; y++){
    if(y === 3){
        continue; 
    }
    console.log(y)
}

//Multiple counters for single loop

for (let uu = 1, yy =10; uu <= 10 && yy >= 1 ; yy--, uu++){
    console.log(uu,yy)
}



console.log("do while")
// do while loop
let kk = 0;
do{
    console.log(kk);
    kk++;

}while(kk <= 5);