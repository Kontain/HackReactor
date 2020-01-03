// Skeleton

// FUNCTION DEFINITION(S)
function isIsogram(text) {
    var isoSet = new Set([])
  // add each char to a set
  for (i in text) {
      isoSet.add(text[i].toLowerCase())
  }
  
  return isoSet.size === text.length;
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
var emptyStr = ''
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

var iso3 = 'bB'
var iso3Expected = false;
var iso3Result = isIsogram(iso3);

assertEquals(iso3Expected, iso3Result, 'Repeating Letters');