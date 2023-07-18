
let arr = [-2,1,-3,4,-1,2,1,-5,4]
let maxSub = arr[0]
let currentMax = 0

for (const e of arr) {
  if (currentMax < 0){
    currentMax = 0
    
  }
  currentMax += e
  maxSub = Math.max(maxSub, currentMax)
}

console.log(maxSub)

//////////////////////////

//valid palindrome
let string = "mom ";
let reversedString = "";

for (const e of string) {
  if (/[a-zA-Z0-9]/.test(e)) {
    reversedString = e + reversedString.toLowerCase()
  }
}
   console.log(reversedString.split("").reverse().join("") === reversedString ? true : false)

///////////////////////

//Valid anagram
let s = "fuck";
let t = "fukc";

const cleanString = (str) => str.replace(/[^a-z]/g,"").split("").sort().join("")

const isAnagram = (s, t) => cleanString(s) === cleanString(t)

console.log(isAnagram(s, t) ? "true" : "false")

///////////////////////

//selection sort
let arr = [-2, -4, 5, 10, 0]

let newArr = []

while (arr.length > 0) {
  minny = Math.min(...arr)
  index = arr.indexOf(minny)
  
  newArr.push(minny)
  arr.splice(index, 1)
  console.log(newArr)
}

///////////////////////

//best time to buy and sell stock
let prices = [7,1,5,3,6,4]

let minny = 0; // Buy
let maxxy = 1; // sell
let maxProfit = 0;

while (maxxy < prices.length) {
  if (prices[minny] < prices[maxxy]) {
    let profit = prices[maxxy] - prices[minny]; // our current profit

    maxProfit = Math.max(maxProfit, profit);
  } else {
    minny = maxxy;
  }
  maxxy++;
}
console.log(maxProfit)

////////////////////////////

//contains duplicate
let nums = [4,2,3,1,2]

const s = new Set(nums)
console.log(s.size !== nums.length)

/////////////////////////////

//product of array except self
let nums = [1,2,3,4]

let result = [];
let left = 1;
let right = 1;

for (let num of nums) {
  // compute left product for num
  result.push(left);
  left *= num;
}

for (let i = nums.length - 1; i >= 0; i--) {
  // compute right product for nums[i] and multiply it with the left product
  result[i] *= right;
  right *= nums[i];
}

console.log(result);

////////////////////

// Max product subarray
let nums = [-2, -4, -3];

let currentMax = 1;
let currentMin = 1;
let maxProduct = nums[0];

for (const num of nums) {
  if (num < 0) {
    // Swap currentMax and currentMin
    [currentMax, currentMin] = [currentMin, currentMax];
  }

  // Update currentMax and currentMin
  currentMax = Math.max(num, currentMax * num);  8
  currentMin = Math.min(num, currentMin * num); -4
  

  maxProduct = Math.max(maxProduct, currentMax, currentMin);
}

console.log(maxProduct);

/////////////////////////////

//find min in sorted array, needs review
let nums = [3,1,5,2,4]
let left = 0;
let right = nums.length - 1;

while (left < right) {
  let mid = Math.floor(left + (right - left) / 2);

  if (nums[mid] > nums[right]) {
    left = mid + 1;
  } else {
    right = mid;
  }
}

console.log(nums[left])

///////////////////////////

//two sum
//hash map O(n)
let nums = [2, 7, 12, 15];
let target = 27;
let complements = {};

for (let i = 0; i < nums.length; i++) {
  let complement = target - nums[i];
  if (complements.hasOwnProperty(complement)) {
    console.log([complements[complement], i]);
    break;
  }
  complements[nums[i]] = i;
}



//two sum
//nested loops O(n^2)
let nums = [2,7,12,15] 
let target = 27
let left = 0
let right = 1

while (left < nums.length - 1) {
    if (nums[left] + nums[right] === target) {
      console.log([left, right])
  } else {
      if (right === nums.length -1) {
        left ++
        right = left + 1
      } else {
        right ++
      }
  }
}

    ///////////////////////////////////

//Find dublicates using hash map
const numbers = [1, 2, 3, 4, 2, 5, 7, 6, 7, 5, 4]

const hashMap = new Map()
const duplicates = []

for (let i = 0; i < numbers.length; i++) {
  const nums = numbers[i]
  if (hashMap.has(nums)) {
    duplicates.push(nums)
  } else {
    hashMap.set(nums, true)
  }
}
console.log(duplicates)

////////////////////////////////


//two sum, hash map, easier than previous implementation 
const numbers = [2, 4, 5, 7, 9];
const target = 11;
const hashMap = new Map()

for (let i = 0; i < numbers.length; i++) {
  const num = numbers[i]
  const complement = target - num
  if (hashMap.has(complement)) {
    console.log([num, complement])
    break
  }
    hashMap.set(num, true)
  
}