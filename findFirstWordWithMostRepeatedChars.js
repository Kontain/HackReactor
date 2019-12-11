// Skeleton

// FUNCTION DEFINITION(S)
function findMaxRepeatCountInWord(word) {
  // Break up individual word into individual letters.
  var wordSplit = word.split('');
  var count = [];
  var highestRepeat = 0;
  // Count the instances of each letter

  for (i in wordSplit) {
    var currentLetter = wordSplit[i].toLowerCase();
    var currentLetterCount = 0
    for (j in wordSplit) {
      if (wordSplit[j].toLowerCase() === currentLetter) {
        currentLetterCount++
      }
    }
    count.push(currentLetterCount);
  }

  // Iterate all the counts and find the highest
  for (k in count) {
      if (count[k] > highestRepeat) {
          highestRepeat = count[k]
      }
  }
  // Return this word's max repeat count
  return highestRepeat;
}

function findFirstWordWithMostRepeatedChars(text) {
  var maxRepeatCountOverall = 0;
  var wordWithMaxRepeatCount = '';
  
  if (typeof text !== 'string') {
      return 'Was not given a string.'
  }

  // Break up input text into words (space-delimited).
  var textSplit = text.split(' ');
  //console.log(textSplit)

  // For each word...
  for (i in textSplit) {
    var currentWord = textSplit[i]
    var repeatCountForWord = findMaxRepeatCountInWord(currentWord)
    //console.log(repeatCountForWord)
    // If that max repeat count is higher than the overall max repeat count, then
      if (repeatCountForWord > maxRepeatCountOverall) {
          maxRepeatCountOverall = repeatCountForWord;
          wordWithMaxRepeatCount = currentWord;
          //console.log(textSplit[i])
      }
      // update maxRepeatCountOverall
      // update wordWithMaxRepeatCount
    }
  return wordWithMaxRepeatCount;
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
var sentence1 = 'Hi, my name is Omar Kanawi'
var sentence1Expected = 'Kanawi'
var sentence1Result = findFirstWordWithMostRepeatedChars(sentence1)

assertEquals(sentence1Expected, sentence1Result, 'Full Sentence as argument - repeated word at end');

var sentence2 = 'Support our fundraiser'
var sentence2Expected = 'Support'
var sentence2Result = findFirstWordWithMostRepeatedChars(sentence2)

assertEquals(sentence2Expected, sentence2Result, 'Full Sentence as argument - repeated word at start');

var numSentence = 12
var numSentenceExpected = 'Was not given a string.'
var numSentenceResult = findFirstWordWithMostRepeatedChars(numSentence)

assertEquals(numSentenceExpected, numSentenceResult, 'Number given as argument')

var booSentence = true;
var booSentenceExpected = 'Was not given a string.'
var booSentenceResult = findFirstWordWithMostRepeatedChars(booSentence)

assertEquals(booSentenceExpected, booSentenceResult, 'Boolean given as argument')

var mixedSentence1 = 'Blah blah' + 12
var mixedSentence1Expected = 'Blah'
var mixedSentence1Result = findFirstWordWithMostRepeatedChars(mixedSentence1)

assertEquals(mixedSentence1Expected, mixedSentence1Result, 'String with number concat')

var mixedSentence2 = 'Glerg glerg' + false
var mixedSentence2Expected = 'Glerg'
var mixedSentence2Result = findFirstWordWithMostRepeatedChars(mixedSentence2)

assertEquals(mixedSentence2Expected, mixedSentence2Result, 'String with boolean concat')