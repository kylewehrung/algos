function generateAcronym(phrase) {
    return phrase
      .split(' ')
      .map(word => word[0].toUpperCase())
      .join('');
  }
  
  // Test case
  const inputPhrase = "rhythm and poetry";
  const acronym = generateAcronym(inputPhrase);
  console.log(acronym); 
  