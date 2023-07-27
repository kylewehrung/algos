let arr = [1, 4, 2, 6, 3];

// Sort array so the order doesn't matter
arr.sort((a, b) => a - b);

let missingNumber;

// For loop, starting i at 0 so it correlates with the indeces
for (let i = 0; i < arr.length; i++) {
  // If the next element in the array isn't one number higher then:
  // Add what the next elements value should be to the value of 'missingNumber' 
  if (arr[i] !== i + 1) {
    missingNumber = i + 1;
    break; 
  }
}

console.log(missingNumber);