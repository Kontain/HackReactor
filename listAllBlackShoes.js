function listAllBlackShoes(inventory) {
	//iterate through inventory
	var blackShoeList = '';

	for (i = 0; i < inventory.length; i++) {
		for (j = 0; j < inventory[i]['shoes'].length; j++) {
          if (inventory[i]['shoes'][j]['name'].indexOf('black') >= 0) {
			blackShoeList += inventory[i]['name'] + ', ' + inventory[i]['shoes'][j]['name'] + ', ' + inventory[i]['shoes'][j]['price'] + '\n'
		  }
		}
		
	  //if shoe color is black, store the designer followed by shoe name and shoe price
	}
	//return the full list of black shoes
	return blackShoeList;

}

//Create helper functions if needed
//assertEquals
function assertEquals(expected, actual, testName) {
	if(expected === actual) {
		console.log('passed');
	} else {
		console.log('FAILED [' + testName + '] Expected ' + expected + ' but got ' + actual);
	}
}

//testSuite

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

var shoeInventoryExpected = 'Brunello Cucinelli, tasselled black low-top lace-up, 1000\nGucci, black leather laced sneakers, 900\n'

var shoeInventoryActual = listAllBlackShoes(shoeInventory)

assertEquals(shoeInventoryExpected, shoeInventoryActual, 'Black Shoe Test');
