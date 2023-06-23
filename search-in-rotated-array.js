let nums = [4,5,6,7,0,1,2]
let target = 0


let left = 0;
let right = nums.length - 1;

while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
    console.log(mid);
    }

    if (nums[left] <= nums[mid]) {
    if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
    } else {
        left = mid + 1;
    }
    } else if (nums[mid] <= nums[right]) {
    if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
    } else {
        right = mid - 1;
    }
    }
}

console.log(-1);
