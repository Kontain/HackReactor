// Skeleton

// FUNCTION DEFINITION(S)
function PhoneNumberFormatter(numbers) {
  this.numbers = numbers;
}

PhoneNumberFormatter.prototype.render = function() {
  var string = '';
  // your code here
  string += this.parenthesize(this.getAreaCode())
  string += ' '
  string += this.getExchangeCode()
  string += '-'
  string += this.getLineNumber()
  return string;
};

PhoneNumberFormatter.prototype.getAreaCode = function() {
  // your code here
  return this.slice(0,3);
};

PhoneNumberFormatter.prototype.getExchangeCode = function() {
  // your code here
  return this.slice(3,6);
};

PhoneNumberFormatter.prototype.getLineNumber = function() {
  // your code here
  return this.slice(6,10);
};

PhoneNumberFormatter.prototype.parenthesize = function(string) {
  return '(' + string + ')';
};

PhoneNumberFormatter.prototype.slice = function(start, end) {
  return this.numbers.slice(start, end).join('');
};

// ASSERTION FUNCTION(S) TO BE USED
function assertEquals(expected, actual, testName) {
  if (expected === actual) {
    console.log('passed')
  } else {
    console.log('FAILED [' + testName + '] Expected ' + expected + ' but got ' + actual)
  }
}
// TESTS CASES
var oNum = new PhoneNumberFormatter([9,1,6,2,3,4,9,8,7,6])
var areaCode = oNum.getAreaCode()
var exChangeCode = oNum.getExchangeCode()
var lineNumber = oNum.getLineNumber()
var rendered = oNum.render()

var areaCodeExpected = '916'
var exChangeCodeExpected = '234'
var lineNumberExpected = '9876'
var renderedExpected = '(916) 234-9876'

assertEquals(areaCodeExpected, areaCode, 'Area Code Test')
assertEquals(exChangeCodeExpected, exChangeCode, 'Exchange Code Test')
assertEquals(lineNumberExpected, lineNumber, 'Line Number Test')
assertEquals(renderedExpected, rendered, 'Fully rendered Phone Number')

//console.log(oNum)
//console.log(areaCode)
//console.log(rendered)