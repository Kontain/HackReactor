function renderInventory(inventory) {
  var renderedInventory = ''

  for (var i = 0; i < inventory.length; i++) {
    var designerObject = inventory[i];

    for (var j = 0; j < designerObject['shoes'].length; j++) {
       renderedInventory += designerObject['name'] + ', ' + designerObject['shoes'][j]['name'] + ', ' + designerObject['shoes'][j]['price'] + '\n';
    }
  }
  return renderedInventory;
}

//Create helper functions if needed

//Assert Functions
function assertEquals(expected, result, testName) {
  if (expected === result) {
    console.log('passed');
  } else {
    console.log('FAILED [' + testName + '] Expected ' + expected + ' but got ' + result);
  }
}

//Test Suite
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

var currentInventoryExpected = 'Brunello Cucinelli, tasselled black low-top lace-up, 1000\nBrunello Cucinelli, tasselled green low-top lace-up, 1100\nBrunello Cucinelli, plain beige suede moccasin, 950\nBrunello Cucinelli, plain olive suede moccasin, 1050\nGucci, red leather laced sneakers, 800\nGucci, black leather laced sneakers, 900\n';

var currentInventoryResult = renderInventory(currentInventory);

assertEquals(currentInventoryExpected, currentInventoryResult, 'Testing renderInventory');