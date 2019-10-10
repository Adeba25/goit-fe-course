function findLongestWord(string) {
    const wordsString = string.split(" ");
    let longestWord = "";
    for (let i = 0; i < wordsString.length; i++) {
      if (wordsString[i].length > longestWord.length) {
        longestWord = wordsString[i];
      }
    }
    return longestWord;
  }
  
  console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'
  
  console.log(findLongestWord("Google do a roll")); // 'Google'
  
  console.log(findLongestWord("May the force be with you")); // 'force'
  