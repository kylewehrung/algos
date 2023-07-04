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