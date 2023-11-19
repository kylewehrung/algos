function findEmbeddedLinkedInURLs(text) {
    // Regular expression to match "LinkedIn" followed by a URL
    const regex = /LinkedIn\s*:\s*(https?:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]+)/gi;
  
    // Use the regex to find all embedded LinkedIn URLs in the text
    const matches = text.match(regex);
  
    // Return the matches or an empty array if none were found
    return matches || [];
  }
  
  // Example usage:
  const text = "LinkedIn: https://www.linkedin.com/in/kyle-wehrung/ is my LinkedIn profile.";
  const embeddedLinkedInURLs = findEmbeddedLinkedInURLs(text);
  
  if (embeddedLinkedInURLs.length > 0) {
    console.log("Embedded LinkedIn URLs found:");
    embeddedLinkedInURLs.forEach((url, index) => {
      console.log(`${index + 1}: ${url}`);
    });
  } else {
    console.log("No embedded LinkedIn URLs found in the text.");
  }
  