function quickSort(arr) {
    if (arr.length <= 1) return arr
  
    const pivot = arr[0] // Choose the first element as the pivot
    const left = []
    const right = []
  
    // Split the array into two sub-arrays, elements less than the pivot and elements greater than the pivot
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i])
      } else {
        right.push(arr[i])
      }
    }
  
    // Recursively sort the left and right sub-arrays
    const sortedLeft = quickSort(left)
    const sortedRight = quickSort(right)
  
    // Combine the sorted sub-arrays along with the pivot to get the final sorted array
    return [...sortedLeft, pivot, ...sortedRight]
  }
  
  // Example: Sort an array using Quick Sort
  const unsortedArray = [64, 34, 25, 12, 22, 11, 90]
  const sortedArray = quickSort(unsortedArray)
  console.log(sortedArray)
  