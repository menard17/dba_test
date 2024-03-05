
// Function to print the number pattern
function printNumberPattern(rows) {
    for (let i = 1; i <= rows; i++) {
        // Print the current number repeating i times
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += i + ' ';
        }
        console.log(row);
    }
}

// Call the function with the desired number of rows (in this case, 6)
printNumberPattern(6);


