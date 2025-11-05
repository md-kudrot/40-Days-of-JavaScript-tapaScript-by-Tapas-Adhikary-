// Function to Check if a String is a Palindrome


function isPalindrome(word) {
    let input = word;

    let inputToStr = input.toString()
    // console.log(inputToStr)

    let inputLen = inputToStr.length - 1;
    // console.log(inputLen)

    let storeValue = ""
    for (let i = inputLen; i >= 0; i--) {
        storeValue += inputToStr[i]
        // console.log(storeValue)

    }

    // console.log(storeValue);

    if (inputToStr == storeValue) {
        console.log("palindrome")
    } else {
        console.log("not palindrome")
    }



}
isPalindrome(121)

