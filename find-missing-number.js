const array = [1, 2, 3, 4, 5, 7];

// total number of elements, including the missing one
const n = array.length + 1; 
// sum of all numbers from 1 to N
const sumOfAllNumbers = (n * (n + 1)) / 2; 
// sum of numbers in the array
const actualSum = array.reduce((sum, num) => sum + num, 0); 
// calculate missing number
const missingNumber = sumOfAllNumbers - actualSum; 

console.log(missingNumber)