function isAlphanumeric(char) {
    // Check if the character is an uppercase letter, lowercase letter, or digit
    return (char >= 'A' && char <= 'Z') ||
           (char >= 'a' && char <= 'z') ||
           (char >= '0' && char <= '9');
  }
  
  function countCharacters(str) {
    const charCount = {};
  
    // Loop through each character in the string
    for (const char of str) {
      if (isAlphanumeric(char)) {
        // Convert the character to lowercase
        const lowerCaseChar = char.toLowerCase();
        // If the character is in the charCount object, increment its count
        if (charCount[lowerCaseChar]) {
          charCount[lowerCaseChar]++;
        } else {
          // If the character is not in the charCount object, initialize its count to 1
          charCount[lowerCaseChar] = 1;
        }
      }
    }
  
    return charCount;
  }
  
  const result = countCharacters("Hello, World!");
  console.log(result);
  
  