let month  = "jun "
let condition = month.toLocaleLowerCase().trim() ;

switch(true){
    case (condition === "april"):
        console.log("Aries")
        break;
    case (condition === "may"):
        console.log("Taurus");
        break;
    case (condition ==="jun"):
        console.log("Gemini")
    default:
        console.log("invalid month name")
}