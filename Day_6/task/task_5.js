// 5. Write a function to Count Vowels in a String

function countVowels(str) {
    const input = str;
    const inputLowCas = input.toLocaleLowerCase();
    const inputLen = input.length - 1;
    let store = '';
    for (let i = 0; i <= inputLen; i++) {
        const Vowels = 'aeiou'
        if (Vowels.includes(inputLowCas[i])) {
            store += inputLowCas[i]
        }
    }
    console.log(`There are ${store.length} vowels in input `)
}

countVowels("kUdrot")



