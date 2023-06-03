let s = "coding is cool" 
let t = "coding is cold"

const cleanString = (str) => str.replace(/[^a-z]/g,"").split("").sort().join("")

const isAnagram = (s, t) => cleanString(s) === cleanString(t)

console.log(isAnagram(s, t) ? "true" : "false")


