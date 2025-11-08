 // 6. Write a Function to Capitalize the First Letter of Each Word in a Sentence
// Write a function capitalizeWords(sentence) that takes a sentence and capitalizes the first letter of each word. You can use the toUpperCase() method of string to convert the lowercase to uppercase.

function capitalizeWords(sentence) {
    const input = sentence;
    const eachWord = input.split(" ")
    const capitalizedWords = eachWord.map(kk => {
        const firstLetter = kk.charAt(0)
        // console.log(firstLetter)

        return firstLetter.toUpperCase() + kk.slice(1)

        // console.log(firstLetterUpper)
        
    })
    console.log(capitalizedWords.join(" "))

}

capitalizeWords("md kamrujjaman al kudrot")