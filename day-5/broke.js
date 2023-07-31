var itemPrice = 100;
var balance = 50;

function broke (itemPrice, balance) {
    if (itemPrice <= balance) {
        balance -= itemPrice;
        console.log(`Purchasing item for $${itemPrice} \nNew balance is $${balance}` );
    } else {
        let balanceNeeded = itemPrice-balance;
        console.log(`You are broke and cannot afford this item. You need an additional $${balanceNeeded} to buy it!`);
    }
}

broke(100 ,50);
broke(200 ,50);
broke(100 ,100);
broke(10 ,50);
broke(105 ,50);
broke(200 ,250);
broke(100 ,1000);
broke(1 ,50);
broke(1000 ,50);
broke(25 ,50);