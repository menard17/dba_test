const arr = [5, 1, 4, 6, 7, 3, 5, 7, 3];

// Using a Map to keep track of element occurrences
const elementCount = new Map();
// Array to store duplicate elements
const duplicates = [];

arr.forEach(num => {
    const count = elementCount.get(num) || 0;
    elementCount.set(num, count + 1);
    
    if (count === 1) {
        duplicates.push(num);
    }
});

console.log("Duplicate elements:", duplicates);

