function rpcGamre() {
    const userInput = prompt("Enter your choice")
    const userChoiceLwCa = userInput.toLocaleLowerCase()
    let userChoice = userChoiceLwCa;
    console.log("Your choice = ", userChoice)

    let computerCho;

    computerCho = Math.floor(Math.random() * 3) + 1;

    // if (computerCho === 1) {
    //     computerCho = "rock"
    // } else if (computerCho === 2) {
    //     computerCho = "pepper"
    // } else {
    //     computerCho = "scissors"
    // }

    switch (computerCho) {
        case 1:
            computerCho = "rock";
            break;
        case 2:
            computerCho = "pepper";
            break;
        default:
            computerCho = "scissors";
    }



    console.log("computer choice = ", computerCho)

    if (computerCho === userChoice) {
        alert(`Computer Choice ${computerCho} and You choice ${userChoice} so the game is tia`)
        console.log("the game is tia")
    } else if (
        userChoice === "rock" && computerCho === "pepper" ||
        userChoice === "pepper" && computerCho === "scissors" ||
        userChoice === "scissors" && computerCho === "rock"
    ) {
        alert(`Computer Choice ${computerCho} and You choice ${userChoice} so computer win`)
        console.log("Computer win")
    } else if (
        userChoice === "pepper" && computerCho === "rock" ||
        userChoice === "scissors" && computerCho === "pepper" ||
        userChoice === "rock" && computerCho === "scissors"
    ) {
        alert(`Computer Choice ${computerCho} and You choice ${userChoice} so You win`)
        console.log("You win")
    } else {
        alert("Input rock / pepper / scissors")
    }

    const playAgainPmt = prompt("Do you want to play again? (yes/no)")
    let playAgain = playAgainPmt ? playAgainPmt.toLocaleLowerCase() : "no";
    console.log(playAgain);


    if (playAgain === "yes") {
        console.log("user want to play again")
        rpcGamre()
    } else {
        alert("Thanks for playing")
        console.log("Thanks for playing")
    }

}

rpcGamre();

