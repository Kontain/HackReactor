// Skeleton

// FUNCTION DEFINITION(S)
function findLongestPalindrome(sentence) {
  // split sentence into words
  var words = sentence.split(' ');
  var palindromeList = [];
  // iterate words and collect the palindromes
  for (i in words) {
    if (isPalindrome(words[i]) === true) {
      palindromeList.push(words[i]);
    }
  }
  // sort the list of palindromes by word length
  palindromeList.sort(sortAscendingByLength)
  // return the largest item in the sorted list
  return palindromeList[palindromeList.length - 1];
}


function reverseString(string) {
  var revString = ''
  var stringLength = string.length
  
  while (stringLength > 0) {
    revString += string[stringLength - 1]
    stringLength--
  }
  return revString;
}

function isPalindrome(word) {
  // hint: you can detect palindromes by comparing a string to its reverse
  if (word.toLowerCase() === reverseString(word.toLowerCase())) {
    return true;
  }
}

function sortAscendingByLength(a, b) {
  if (a.length > b.length) {
    return 1;
  } else if (a.length < b.length) {
    return -1;
  }
  return 0;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertEquals(expected, actual, testName) {
  if (expected === actual) {
    console.log('passed')
  } else {
    console.log('FAILED [' + testName + '] Expected ' + expected + ' but got ' + actual)
  }
}

// TESTS CASES
var palindrome1 = 'Hello, Madam';
var palindrome1Expected = 'Madam';
var palindrome1Result = findLongestPalindrome(palindrome1)

assertEquals(palindrome1Expected, palindrome1Result, 'Test Madam')

var palindrome2 = 'Mom took the racecar';
var palindrome2Expected = 'racecar';
var palindrome2Result = findLongestPalindrome(palindrome2)

assertEquals(palindrome2Expected, palindrome2Result, 'Test racecar')

var oName = 'Omar';
var oNameRevExpected = 'ramO';
var oNameRevResult = reverseString(oName)

assertEquals(oNameRevExpected, oNameRevResult, 'ReverseString Test');

var wordPalindrome = 'racecar';
var wordPalindromeExpected = true;
var wordPalindromeResult = isPalindrome(wordPalindrome);

assertEquals(wordPalindromeExpected, wordPalindromeResult, 'Test isPalindrome Function');
