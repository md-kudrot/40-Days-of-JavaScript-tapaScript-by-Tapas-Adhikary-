// Write a function that tries to access a variable declared inside another function.

function kk() {
    function mm(){
        let store = "mango"
    }
    mm();
    console.log(store);
}

kk();
