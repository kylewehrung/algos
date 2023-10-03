function permute(nums) {
    const result = [];
  
    function backtrack(currPerm, remainingNums) {
      if (remainingNums.length === 0) {
        result.push(currPerm.slice()); // Clone current permutation
        return;
      }
  
      for (let i = 0; i < remainingNums.length; i++) {
        currPerm.push(remainingNums[i]);
        const newRemainingNums = remainingNums.slice(0, i).concat(remainingNums.slice(i + 1));
        backtrack(currPerm, newRemainingNums);
        currPerm.pop();
      }
    }
  
    backtrack([], nums);
    return result;
  }
  
  const inputArray = [1, 2, 3];
  const permutations = permute(inputArray);
  console.log(permutations);





// Pseudocode!!!

//   function permute(nums):
//     result = []  An array to store the permutations

//     function backtrack(currPerm, remainingNums):
//         if remainingNums is empty:
//             If there are no remaining numbers, currPerm is a complete permutation
//             Add a copy of currPerm to result
//             return

//         for i from 0 to length of remainingNums - 1:
//             Try adding each remaining number to the current permutation
//             Add remainingNums[i] to currPerm
//             newRemainingNums = remainingNums with remainingNums[i] removed
//             backtrack(currPerm, newRemainingNums)
//             Remove last element from currPerm to backtrack

//     // Start recursion with an empty current permutation and the input array
//     backtrack([], nums)

//     return result

  