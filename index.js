function isPalindrome(word) {
  // Write your algorithm here
  let reversed = word.split('').reverse().join('');
  return reversed === word;

}

/* 
  Add your pseudocode here
*/
//-convert strings to lowercase
//-reverse the string
//-compare  the original string to the reverse done
//-return true if they are the same, false if not

/*
  Add written explanation of your solution here
*/
//-convert the string to lowercase.
//-reverse the string, 
//-and compare the reversed string to the original string

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
