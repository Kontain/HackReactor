function laceShoesIndex(inventory) {
	//iterate through shoe and find all that have 'lace' in the name
	var shoeIndexResult = [];

	for (i = 0; i < inventory.length; i++) {
		var designerObject = inventory[i]
        //console.log(designerObject)
		var shoes = designerObject['shoes']
        //console.log(shoes)
		for (j = 0; j < shoes.length; j++) {
			var currentShoe = shoes[j]
            //console.log(currentShoe)
			if (shoeContainsLace(currentShoe)) {
                //console.log(currentShoe)
				var shoeNameArray = currentShoe['name'].split(' ');
				/*console.log(shoeNameArray)
				console.log(getLaceIndex(shoeNameArray))*/
				laceObj = {};
				laceObj['nameWords'] = shoeNameArray;
				laceObj['targetWordIndex'] = getLaceIndex(shoeNameArray);
				shoeIndexResult.push(laceObj);
			}
		}
	}
	return shoeIndexResult;
}

	  //create an object for each instance thatlace appears
	  //object should have nameWords (a list of the words in the name that lace was found) and targetWordIndex (the index that lace is found in the list)

function shoeContainsLace(shoe) {
	if (shoe['name'].indexOf('lace') !== -1) {
		return true
	} else {
		return false
	}
}

function getLaceIndex(inventoryNameArray) {
	for (k = 0; k < inventoryNameArray.length; k++) {
		if (inventoryNameArray[k].indexOf('lace') !== -1) {
			return k;
		}
	}
}

//asert Functions
function assertArrayEquals(expected, actual, testName) {
	var sameLength = expected.length === actual.length;

	var sameValues = true;

	for (i = 0; i < actual.length; i++) {
		if (JSON.stringify(actual[i]) !== JSON.stringify(expected[i])) {
			sameValues = false;
			break
		}
	}

	if (sameLength && sameValues) {
		console.log('passed');
	} else {
		console.log('FAILED [' + testName + '] Expected ' + expected + ' but got ' + actual);
	}
}

//test Suite
var currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];

var expectedResult = [
  {
    "nameWords": [
      "tasselled",
      "black",
      "low-top",
      "lace-up"
    ],
    "targetWordIndex": 3
  },
  {
    "nameWords": [
      "tasselled",
      "green",
      "low-top",
      "lace-up"
    ],
    "targetWordIndex": 3
  },
  {
    "nameWords": [
      "red",
      "leather",
      "laced",
      "sneakers"
    ],
    "targetWordIndex": 2
  },
  {
    "nameWords": [
      "black",
      "leather",
      "laced",
      "sneakers"
    ],
    "targetWordIndex": 2
  }
];

var actualResult = laceShoesIndex(currentInventory);

assertArrayEquals(expectedResult, actualResult, 'Test Current Inventory');




