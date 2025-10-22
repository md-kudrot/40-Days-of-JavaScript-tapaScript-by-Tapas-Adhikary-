console.log("Hello, tapaScript!");
console.log("Welcome to 40 Days of JavaScript!");
document.write("Check the browser console for a message!"); // outPut: script.js:3 Failed to execute 'write' on 'Document': It isn't possible to write into a document from an asynchronously-loaded external script unless it is explicitly opened.

// why this error?
// ChatGpt:যখন একটা script “async” বা “defer” দিয়ে লোড হয়, তখন HTML পেজটা পুরো লোড হয়ে যায় — document তখন “closed” অবস্থায় থাকে।
// কিন্তু document.write() কেবলমাত্র তখনই কাজ করে যখন document “open” থাকে (মানে পেজ এখনো লোড হচ্ছে)।
// তাই ব্রাউজার বলে দেয় — “It isn't possible to write into a document from an asynchronously-loaded external script.”
