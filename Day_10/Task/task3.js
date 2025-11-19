// Create a function with a nested function and log a variable from the parent function.
function kk() {
    let store = "mango"
    function uu () {
        console.log(store)
    }
    uu()
}

kk();