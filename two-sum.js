//two sum
//hash table O(n)
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
