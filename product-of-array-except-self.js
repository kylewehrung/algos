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
  // compute right product for nums[i] and multiply it
  result[i] *= right;
  right *= nums[i];
}

console.log(result);