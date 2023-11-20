var radius = 5;
var area = Math.PI * Math.pow(radius, 2);
console.log(area);

console.log(Math.trunc(-5.9));
console.log(Math.floor(-5.9));

var someNr = 3.23232322345546546;
var roundedNumber = Math.round(100 * someNr) / 100;
console.log(roundedNumber);

// random nr between 0 and 100
var random = Math.round(Math.random() * 100)
console.log(random);


var price = 7.99;
var taxRate = .0825;
var tax = price * taxRate; // returns .659175
// The toFixed(2) method call returns the value as a
// string with 2 digits to the right of the decimal
// point. parseFloat() turns the string back to a number
tax = parseFloat(tax.toFixed(2));
console.log(tax);

console.log(parseInt("1,220"));

var x = 5;
var y = ++x;

console.log(x, y);