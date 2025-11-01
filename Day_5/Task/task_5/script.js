let input = 6789;


let numToStr = input.toString();


let a = numToStr.length - 1;

// Problem solved using for while
// while (a >= 0) {

//     console.log(numToStr[a])
   
//     a--;

// }


//Problem solved using for loop
for (let a = numToStr.length - 1; a >= 0 ; a--){
    console.log(numToStr[a])
}


