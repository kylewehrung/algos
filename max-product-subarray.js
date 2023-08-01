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

  currentMax = Math.max(num, currentMax * num);  8
  currentMin = Math.min(num, currentMin * num); -4
  

  maxProduct = Math.max(maxProduct, currentMax, currentMin);
}

console.log(maxProduct);