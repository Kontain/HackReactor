// Skeleton

// FUNCTION DEFINITION(S)
function average(numbers) {
  // uses sum function
  // returns the average of an array of numbers
  return sum(numbers) / numbers.length
}

function sum(numbers) {
  // returns the sum of an array of numbers
  var onlyNumbers = true;
  
  for (i = 0; i < numbers.length; i++) {
      if (typeof numbers[i] !== 'number') {
          console.log('Array has other data types other than numbers :', typeof numbers[i]);
          onlyNumbers = false;
          return numbers;
      }
  }
  
  var result = 0
  
  if (onlyNumbers === true) {
      for (var i = 0; i < numbers.length; i++) {
      result += numbers[i];
      }
  }
  
  return result
}

// ASSERTION FUNCTION(S) TO BE USED
function assertEquals(expected, result, testName) {
    if (JSON.stringify(expected) === JSON.stringify(result)) {
        console.log('passed')
    } else {
        console.log('FAILED [' + testName + '] Expected ' + expected + ' but got ' + result + ' instead.')
    }
}
// TESTS CASES
var numArray = [1,2,3,4,5]

var sumExpected = 15
var sumResult = sum(numArray)

assertEquals(sumExpected, sumResult, 'Testing sum function returns the sum of an array')

//array has string data type
var strArray = [1, 2, 'Omar', 4, 5]

var sumStrExpected = [1, 2, 'Omar', 4, 5]
var sumStrResult = sum(strArray)

assertEquals(sumStrExpected, sumStrResult, 'Testing sum function handles arrays with string data type')

//array has boolean data type
var booArray = [1, 2, true, 4, 5]

var sumBooExpected = [1, 2, true, 4, 5]
var sumBooResult = sum(booArray)

assertEquals(sumBooExpected, sumBooResult, 'Testing sum function handles arrays with boolean data type')

//test average
var avgExpected = 3
var avgResult = average(numArray)

assertEquals(avgExpected, avgResult, 'Testing average function')