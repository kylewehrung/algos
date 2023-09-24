function findAddresses(text) {
    // Regex pattern to match addresses
    const addressRegex = /(\d+\s+\w+\s+\w+,\s+[\w\s]+,\s+\w+\s+\d{5}(-\d{4})?)/g;
  
    // Use "match" to find all addresses in text
    const addresses = text.match(addressRegex);
  
    return addresses;
  }
  
  const text = "456 Main St, San Francisco, California 12345\n789 Elm St, Loveland, CO 54321-6789";
  const foundAddresses = findAddresses(text);
  console.log(foundAddresses);
  
