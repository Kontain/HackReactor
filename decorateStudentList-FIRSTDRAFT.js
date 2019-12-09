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

  if(classList.length === 1 && typeof classList === 'string') {
  	classListWithAges.push({});
  	classListWithAges[0]['name'] = classList
  	classListWithAges[0]['age'] = getRandomIntInclusive(10, 11);
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
	//verify lists are equal in length
	var sameLength = expected.length === result.length;

	//verify it is an array
	var 
	
	//verify that properties are name and age
	var hasProperties = true;

	if (sameLength) {
		for (i in result) {
			if (result[i].length !== 2 && result[i].name === undefined && result[i].age === undefined) {
				hasProperties = false;
				break
			}
		}
	}
	
	var hasSameNames = true;
	//verify that name of result and expected are the same
	if (sameLength) {
		for (i in result) {
			if (result[i]['name'] !== expected[i]['name']) {
				hasSameNames = false;
				break
			}
		}
	}
	//verify that age is between 10 or 11
	var ageInRange = true;
	
	if (sameLength) {
		for (i in result) {
			if (result[i]['age'] < 10 || result[i]['age'] > 11) {
				ageInRange = false;
				break
			}
		}
	}

	if (sameLength && hasProperties && hasSameNames && ageInRange) {
		console.log('passed');
	} else {
		console.log('FAILED [' + testName + '] Expected ' + JSON.stringify(expected) + ' but got ' + JSON.stringify(result)
	}
}
// TESTS CASES
//is not an array
var singleString = 'blah'
var singleStringExpected = [{name: 'blah', }]
var singleStringResult =