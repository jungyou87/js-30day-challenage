var person = 'Mark';
var car = 'Jeep';
var animal = 'Leopard';
var city = 'Townsville';
var game = 'Cards';
var water = 'Flows';
var clean = 'Shower';
var mood = 'Frown';

var mission = person[0]+car[1]+ (animal[0] + city[0]).toLowerCase()+game[3]+city.slice(1,4);

console.log(mission);