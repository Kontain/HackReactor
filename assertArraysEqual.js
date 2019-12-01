// FUNCTION DEFINITION(S)
function map(array, callbackFunction) {
  var newArray = [];

  for (var i = 0; i < array.length; i++) {
    newArray.push(callbackFunction(array[i]));
  }

  return newArray;
}

function cubeAll(numbers) {
  return map(numbers, function(n) {
    return n * n * n;
  });
}

// ASSERTION FUNCTION(S) TO BE USED

// TESTS CASES

function addOne(num) {
    return num + 1
}

function assertArraysEqual(expected, actual, testName) {
    var sameLength = expected.length === actual.length;
    
    var sameElements = true;
    
    for (i in expected) {
        if (expected[i] !== actual[i]) {
            var sameElements = false;
            break
        }
    }
    
    if (sameElements && sameLength) {
        console.log('passed');
    } else {
        console.log('Failed [' + testName + '] Expected \"' + expected + '\" but got ' + actual);
    }
}

var mapResult1 = map([1,2,3], addOne);
var mapExpected1 = [2,3,4]

assertArraysEqual(mapExpected1, mapResult1, 'Map Function Test')

var cubeResult1 = cubeAll([1, 2, 3])
var cubeExpected1 = [1, 8, 27]

assertArraysEqual(cubeExpected1, cubeResult1, "CubeAll Function Test")