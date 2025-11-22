// 6. Write a function factory of counter to increment, decrement, and reset a counter. Use closure to refer the count value across the functuions.


function mainCounter(mainValue) {
    let totallCount = mainValue;

    return {
        "increment": function (IncreVal) {
            console.log(totallCount = totallCount + IncreVal);
        },

        "decrement": function (decrement) {

            if(totallCount > decrement){
                console.log(totallCount = totallCount - decrement);
            }else{
                console.log("its not possible")
            }

        },

        "reset": function () {
            console.log(totallCount = 0);
        }
    }
}

const totalVal = mainCounter(500)

totalVal.increment(500)
totalVal.reset()
totalVal.increment(500)
totalVal.increment(500)
totalVal.reset()
totalVal.decrement(10)
totalVal.increment(1000)
totalVal.decrement(500)
totalVal.decrement(499)