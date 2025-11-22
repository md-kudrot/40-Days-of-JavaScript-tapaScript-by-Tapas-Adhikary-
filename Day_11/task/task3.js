// 3. Create a button dynamically and attach a click event handler using a closure. The handler should count and log how many times the button was clicked.

const button = document.getElementById("button")

button.addEventListener("click",function(){
    mainCount()
})



function mainClick () {
    let countClick = 1;
    return function () {
        console.log(countClick++)
    }
}

const mainCount = mainClick();