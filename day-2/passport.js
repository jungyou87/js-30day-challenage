// Day 2 mission part 2

var dateOfBirth = '5/24/90';
var age = 33;
var isOrganDonor = false;
var state = 'NY';
var streetAddress = '123 Main St.';
var city = 'New York';
var zip = 69708;
var idNumber = '321556042';

var str = `Hi, my name is Ian and I was born on ${dateOfBirth} and I live at ${streetAddress}, ${city} ${state} ${zip} and my ID number is ${idNumber}. I am ${age} years old and I am ${isOrganDonor? '' : 'not' } an organ donor.`

console.log(str);