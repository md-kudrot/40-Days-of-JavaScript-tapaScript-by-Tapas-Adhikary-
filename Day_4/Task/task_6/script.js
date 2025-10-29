let sideOne = 5;
let sideTwo = 5;
let sideThree = 2;

if(sideOne + sideTwo > sideThree && sideTwo + sideThree > sideOne && sideThree + sideOne > sideTwo ){
    console.log("triangle")
}else{
    console.log("Not a triangle")
    return;
}

if(sideOne == sideTwo && sideTwo == sideThree){
    console.log("Equilateral")
}else if(sideOne == sideTwo || sideTwo == sideThree || sideOne == sideThree){
    console.log("Isosceles")
}else{
    console.log("Scalene")
}



