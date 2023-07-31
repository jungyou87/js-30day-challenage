var nums = [2,3,4,5,6,7,8,9,10,11,12];

var evenTotal=0;

for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num%2==0) {
        evenTotal = evenTotal + num;
    }
}

console.log(evenTotal);
