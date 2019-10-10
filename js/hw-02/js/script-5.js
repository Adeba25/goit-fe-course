function checkForSpam(str) {
  const checkLowerCaseString = str.toLowerCase();
  let includeSpam = false;

  if (
    checkLowerCaseString.includes("spam") ||
    checkLowerCaseString.includes("sale")
  ) {
    includeSpam = true;
  }

  return includeSpam;
}

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
