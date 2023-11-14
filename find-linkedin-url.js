function findLinkedInURLs(text) {
    // Regex to match LinkedIn URLs
    const regex = /https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]+/g;
  
    // Regex to find all LinkedIn URLs in some text
    const matches = text.match(regex);
  
    // Return the array of LinkedIn URLs or an empty array if no found
    return matches || [];
  }
  
  // Example:
  const text = "You can find my LinkedIn profile at https://www.linkedin.com/in/kyle-wehrung/. Lets connect!";
  const linkedinURLs = findLinkedInURLs(text);
  
  if (linkedinURLs.length > 0) {
    console.log("LinkedIn URLs found:");
    linkedinURLs.forEach((url, index) => {
      console.log(`${index + 1}: ${url}`);
    });
  } else {
    console.log("No LinkedIn URLs found in the text");
  }
  