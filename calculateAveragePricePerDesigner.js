function calculateAveragePricePerDesigner(inventory) {
	var avgPricePerDesigner = {'designers': []};
	//iterate over list of shoe objects
	for (i = 0; i < inventory.length; i++) {
		avgPricePerDesigner['designers'].push({});
		avgPricePerDesigner['designers'][i]['name'] = inventory[i]['name']
		var designerShoeTotal = 0;
		
		for (j = 0; j < inventory[i]['shoes'].length; j++) {
			designerShoeTotal += inventory[i]['shoes'][j]['price']
		}

		var avgShoeTotal = designerShoeTotal / inventory[i]['shoes'].length

		avgPricePerDesigner['designers'][i]['averagePrice'] = avgShoeTotal
	}

	return avgPricePerDesigner;
		//store the designer name as an object property in 'designers' property of avgPricePerDesigner
		//iterate over each available shoe
			//add prices together
			//divide total prices by the total different shoes available and store in average price property in 'designers' property of avgPricePerDesigner

}

// Create helper functions if needed

//assertObjectEquals function
function assertObjectEquals(expected, actual, testName) {
    expectedStr = JSON.stringify(expected);
    actualStr = JSON.stringify(actual);
    
    if (expectedStr === actualStr) {
        console.log('passed');
    } else {
        console.log('FAILED [' + testName + '] Expected ' + expectedStr + ' but got ' + actualStr);
    }
}

//test suite
var shoeInventory = [
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

var expectedShoe = {
  'designers': [
    {
      'name': 'Brunello Cucinelli',
      'averagePrice': 1025
    },
    {
      'name': 'Gucci',
      'averagePrice': 850
    }
  ]
};

var actualShoe = calculateAveragePricePerDesigner(shoeInventory);

assertObjectEquals(expectedShoe, actualShoe, 'Testing Shoe Inventory');