const arr = [10, 50, 500000, 0, 30];
for (const value of arr) {
    setTimeout(() => { console.log(value) },
        value);
}