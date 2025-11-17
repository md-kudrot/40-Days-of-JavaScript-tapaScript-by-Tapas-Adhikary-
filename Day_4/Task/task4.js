let age = 18 ; 

switch(true){
    case (age < 18):
        console.log('ticket prices $3');
        break;
    case (age >= 18 && age <= 60):
        console.log("ticket prices $10");
        break;
    case (age > 60):
        console.log("ticket prices $8")
}