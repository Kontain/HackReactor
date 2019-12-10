// FUNCTION DEFINITION(S)

// USE THIS FUNCTION TO GENERATE A RANDOM NUMBER
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function decorateClassListWithAges(classList) {
  // creates an object for each string in the input array, with an age of 10 or 11
  // returns an array of these objects
  var classListWithAges = []

  if(typeof classList === 'string') {
  	classListWithAges.push({});
  	classListWithAges[0]['name'] = classList
  	classListWithAges[0]['age'] = getRandomIntInclusive(10, 11);
  	return classListWithAges;
  }

  var allString = true;

  for (i in classList) {
  	if (typeof classList[i] !== 'string') {
  		allString = false
  		break
  	}
  }

  if (allString) {
  	for (i in classList) {
  		classListWithAges.push({})
  	}
  }
  if (Array.isArray(classList) && allString) {
  	for(i in classListWithAges) {
  		classListWithAges[i]['name'] = classList[i]
  		classListWithAges[i]['age'] = getRandomIntInclusive(10, 11);
  	}
  } else {
  	return 'Was not passed a list of names.';
  }
  
  return classListWithAges;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertArrayEquals(expected, result, testName) {
	var sameLength = expected.length === result.length;

	if (Array.isArray(result)) {
		for (i in result) {
			if (result[i]['name'] !== expected[i]['name']) {
				console.log('FAILED: Name is dissimilar at index ' + i)
				break
			}

			if(assertWithinRange(10, 11, result) === false) {
				console.log('FAILED: Age is not within range at index ' + i + '  ' + testName)
				break
			}
		}
	} else if (expected !== result) {
		console.log('FAILED [' + testName + '] Expected ' + expected + ' but got ' + result)
	} else {
		console.log('passed');
	}
}

function assertWithinRange(low, high, result) {
	for (i in result) {
		if (result[i]['age'] >= low && result[i]['age'] <= high) {
			return true;
		} else {
			return false;
		}
	}
}
// TESTS CASES
//is not an array and element is string
var isString = 'Omar'
var isStringExpected = [{'name': 'Omar', 'age': 11}]
var isStringResult = decorateClassListWithAges(isString);

assertArrayEquals(isStringExpected, isStringResult, 'Handling String');
//is not an array and element is number
var isNum = 9
var isNumExpected = 'Was not passed a list of names.'
var isNumResult = decorateClassListWithAges(isNum);

assertArrayEquals(isNumExpected, isNumResult, 'Argument given is Number');
//is not an array and element is boolean
var isBoo = true
var isBooExpected = 'Was not passed a list of names.'
var isBooResult = decorateClassListWithAges(isBoo)

assertArrayEquals(isBooExpected, isBooResult, 'Argument given is Boolean')
//is array and elements are string
var arrayString = ["Joe", "Jack", "John"]
var arrayStringExpected = [{'name': "Joe", 'age': 11}, {'name': "Jack", 'age': 11}, {'name': "John", 'age': 10}]
var arrayStringResult = decorateClassListWithAges(arrayString)

assertArrayEquals(arrayStringExpected, arrayStringResult, 'Given list of strings');
assertWithinRange(10, 11, arrayStringResult, 'Testing age within range of 10 or 11')
//is array and elements are number
var arrayNum = [7, 9, 8]
var arrayNumExpected = 'Was not passed a list of names.'
var arrayNumResult = decorateClassListWithAges(arrayNum);

assertArrayEquals(arrayNumExpected, arrayNumResult, 'Given array of numbers')
//is array and elements are boolean
var arrayBoo = [true, false, true]
var arrayBooExpected = 'Was not passed a list of names.'
var arrayBooResult = decorateClassListWithAges(arrayBoo);

assertArrayEquals(arrayBooExpected, arrayBooResult, 'Given array of booleans')

//array mix of string, num, and boo
var arrayMix = ['Omar', 9, false]
var arrayMixExpected = 'Was not passed a list of names.'
var arrayMixResult = decorateClassListWithAges(arrayMix);

assertArrayEquals(arrayMixExpected, arrayMixResult, 'Given a mixed datatype array')

//age is not within range of 10 or 11

