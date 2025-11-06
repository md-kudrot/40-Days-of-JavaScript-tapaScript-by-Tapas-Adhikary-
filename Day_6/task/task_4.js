// 4. Write a Function to Find Factorial of a Number

function factorial(n){
    const value = n ;
    let result = 1;
    for(let i = 1; i <= value ; i++){
        result *= i
    }
    console.log(result)
}
factorial(3)
