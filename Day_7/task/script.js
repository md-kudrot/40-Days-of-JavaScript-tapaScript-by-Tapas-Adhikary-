let UserSelectNum;
let secretNum;
let count = 0;

function input() {
    let UserSelectNumPmt = prompt("Enter a number between 1 and 10:");
    UserSelectNum = Number(UserSelectNumPmt);

    console.log("Your guess:", UserSelectNum);
    console.log("Secret number:", secretNum);
    checking();
}

function checking() {
    console.log(secretNum)
    if (secretNum > UserSelectNum) {
        count++;
        console.log("You are smaller than the computer, try again!");
        alert("You are smaller than the computer, try again!");
        input();

    } else if (secretNum < UserSelectNum) {
        count++;
        console.log("You are bigger than the computer, try again!");
        alert("You are bigger than the computer, try again!");
        input();

    } else if (UserSelectNum === secretNum) {
        count++;
        alert(`You tried ${count} times and you succeeded!`);

        const askForRestart = prompt("Do you want to play again? (yes/no)");

        if (askForRestart && askForRestart.toLowerCase() === "yes") {
            count = 0;
            randomN();
        } else {
            alert("Thanks for playing!");
        }
    }
}

function randomN() {
    const randomNum = Math.floor(Math.random() * 10 + 1);
    secretNum = randomNum;
    console.log("New secret number:", secretNum);
    setTimeout(() => {
        input();
    }, 1000);
}

randomN();
// console.log("Game started!");
