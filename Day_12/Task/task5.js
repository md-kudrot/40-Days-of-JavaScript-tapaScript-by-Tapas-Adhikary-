// 5. Book Store Inventory System
// Store books in an object.
// Add functionality to check availability and restock books.

const storeBook = [{
    name: "micle",
    price: 500,
    author: "John Doe",
    quantity: 5
}]


function addNewBook(newName, newPrice, newAuthor, newQuantity) {
    let name = newName.toLowerCase();
    let price = newPrice;
    let quantity = newQuantity;
    let author = newAuthor.toLowerCase();
    storeBook.push({
        name, price, author, quantity
    })
}

addNewBook("kk", 100000, "MD Kamrujjaman", 0)
addNewBook("kadfk", 743700000, "MD biplob", 15)
addNewBook("hakimin", 123, "lala", 20)


function findBooksQuantity(findBookName) {
    let findBook = findBookName.toLowerCase()
    // console.log(findBook)


    let isBook = false;

    for (let i = 0; i < storeBook.length; i++) {

        // console.log(i)
        let bookObj = storeBook[i]
        let storeName = bookObj.name
        // console.log(storeName)


        if (storeName === findBook) {

            isBook = true;

            if (bookObj.quantity === 0) {
                // console.log("This book is not available")
                console.log(` ${storeName} is not available right now, Total Quantity: ${bookObj.quantity}`)
            } else {
                console.log(` ${storeName} is available ,Total Quantity: ${bookObj.quantity}`)

            }

            break;

        }

    }

    // console.log(isBook)

    if(! isBook){
        console.log("Book not found")
    }



}

findBooksQuantity("kk")



function reStock(findBookName, increaseQty) {
    let increaseQtyValue = increaseQty;
    let findBook = findBookName.toLowerCase()
    // console.log(findBook)
    
    
    for (let i = 0; i < storeBook.length; i++) {
        
        // console.log(i)
        let bookObj = storeBook[i]
        let storeName = bookObj.name
        // console.log(storeName)
        
        
        if (storeName === findBook) {
            bookObj.quantity += increaseQtyValue
            console.log(` ${storeName} Quantity incressed, Total Quantity is: ${bookObj.quantity}`)
            
        }
        
    }
    
    
    
}
reStock("kk", 5)







console.log(storeBook)