/* write program to check given no is palindrome or not*/

console.log(isPalindrome("racecar"));

function isPalindrome(str)
{
  const reverseString=str.split("").reverse().join();
  return str === reverseString;

}
