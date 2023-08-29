function findNonAlphabeticalChars(str) {
    const nonAlphabeticalChars = [];
  
    for (const char of str) {
      if (!char.match(/[a-zA-Z]/)) {
        nonAlphabeticalChars.push(char);
      }
    }
  
    return nonAlphabeticalChars;
  }
  
  // Test case
  const inputString = "Hello, one23 World!";
  const nonAlphabeticalChars = findNonAlphabeticalChars(inputString);
  console.log(nonAlphabeticalChars); 
  