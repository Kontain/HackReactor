// Skeleton

// FUNCTION DEFINITION(S)
function isIsogram(text) {
    var isoSet = new Set([])
  // add each char to a set
  for (i in text) {
      isoSet.add(text[i])
  }
  /*console.log(isoSet)
  console.log(isoSet.size)
  console.log(text.length)*/
  
  if (isoSet.size === text.length) {
      return true;
  } else {
      return false;
  }
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
  // note: a set drops dup values
  // thus, to see if all the chars were unique,
  // check length of text and the size of the set
}

// ASSERTION FUNCTION(S) TO BE USED
function assertEquals(expected, result, testName) {
    if (expected === result) {
        console.log('passed')
    } else {
        console.log('FAILED [' + testName + '] Expected ' + expected + ' but got ' + result)
    }
}
// TESTS CASES
var emptyStr = ' '
var emptyStrExpected = true;
var emptyStrResult = isIsogram(emptyStr)

assertEquals(emptyStrExpected, emptyStrResult, 'Empty String Test');

var iso1 = 'aftershock'
var iso1Expected = true;
var iso1Result = isIsogram(iso1);

assertEquals(iso1Expected, iso1Result, 'Isogram word test');

var iso2 = 'aaaaaaaa'
var iso2Expected = false;
var iso2Result = isIsogram(iso2);

assertEquals(iso2Expected, iso2Result, 'Repeating Letters');