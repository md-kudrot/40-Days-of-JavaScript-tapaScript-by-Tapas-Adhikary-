// Find the summation of all odd numbers between 1 to 500 and print them on the console log.

let totallValue = 0
for ( let a = 1 ; a <= 500 ; a++ ){
    if(a%2 !== 0){
        totallValue += a;
    }
}
console.log(totallValue)