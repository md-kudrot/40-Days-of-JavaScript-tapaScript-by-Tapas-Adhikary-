function myAccount(minimum) {
    let balance = minimum;

    return {
        "diposit": function (tk) {
            balance = balance + tk;
            console.log(`previous balance ${minimum} , add balance ${tk} , new balance ${balance} `)
        },

        "withdrow": (tk) => {
            // console.log(balance)
            // console.log(tk)
            if (tk <= balance) {
                balance = balance - tk;
                console.log(`previous balance ${balance} ,  withdrow ${tk} , new balance ${balance} `)
            }else{
                console.log("Withdrow is not possible")
            }

        }
    }
}

const mainBalance = myAccount(200);

// console.log(mainBalance)

console.log(mainBalance.diposit(400))
console.log(mainBalance.withdrow(600))
console.log(mainBalance.diposit(300))
