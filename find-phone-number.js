function findPhoneNumbers(text) {
    // Regular expression pattern to match phone numbers!
    const phoneRegex = /(\d{3}[-\s]?\d{3}[-\s]?\d{4}|\(\d{3}\)[-.\s]?\d{3}[-.\s]?\d{4}|\d{10}|\d{3}[-\s]?\d{4})/g;
  
    // Match method to find phone numbers in the text
    const phoneNumbers = text.match(phoneRegex);
  
    return phoneNumbers;
  }
  

  const text = "Here are some phone numbers: 123-456-7890, (555) 555-5555, 5555555555, 123 456 7890, string, 303-606-909";
  const foundPhoneNumbers = findPhoneNumbers(text);
  console.log(foundPhoneNumbers);
  