/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z]/g, '');
  let n = str.length;
  let l = 0, r = n-1;
  while(l <= r){
    if(str[l] != str[r])
      return false;
    l++;
    r--;
  }
  return true;
}
console.log(isPalindrome("Nan"));
module.exports = isPalindrome;
