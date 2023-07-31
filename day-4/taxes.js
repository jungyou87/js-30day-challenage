var shoes = 15.00;
var shirt = 15.00;
var pants = 15.50;
var glasses = 15.00;
var hat = 15.50;
var gloves = 2.50;

var total = shoes + shirt + pants + glasses + hat + gloves;

console.log(Number(total.toFixed(2)));

var coupon = 0.25;

var priceAfterDiscount = total * (1-coupon);

console.log(Number(priceAfterDiscount.toFixed(2)));

var taxRate = 7.75;

var tax = Number((priceAfterDiscount * taxRate/100).toFixed(2));

console.log(tax);

var finalPrice = priceAfterDiscount + tax;

console.log(Number(finalPrice.toFixed(2)));