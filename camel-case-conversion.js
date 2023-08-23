function convertToCamelCase(sentence) {
    const words = sentence.split(' ');
  
    const camelCaseWords = words.map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
  
    return camelCaseWords.join('');
  }
  
  // Test case, fun!
  const inputSentence = "hello world how are you";
  const camelCaseOutput = convertToCamelCase(inputSentence);
  console.log(camelCaseOutput); 
  