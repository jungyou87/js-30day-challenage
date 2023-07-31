var fruit = ['apple', 'banana', 'orange', 'strawberry'];

fruit.splice(2,1)
console.log(fruit);

fruit.pop()
console.log(fruit);

fruit.unshift('pear');
console.log(fruit);

fruit.splice(0,fruit.length)
console.log(fruit);