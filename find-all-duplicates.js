//Find dublicates using hash map
const numbers = [1, 2, 3, 4, 2, 5, 7, 6, 7, 5, 4]

//Create hash map, then array to push results into
const hashMap = new Map();
const duplicates = [];

//Make for loop to iterate though array 
for (let i = 0; i < numbers.length; i++) {
  //Let nums equal the current element being iterated through by the loop
  let nums = numbers[i];
  //If the hash map returns true to alreasy having an element in it
  //push that number to the duplicates array
  if (hashMap.has(nums)) {
    duplicates.push(nums);
  } else {
    //If the hash map doesn't have element in it already, add it to the hash map
    hashMap.set(nums);
  }
}

console.log(duplicates);
