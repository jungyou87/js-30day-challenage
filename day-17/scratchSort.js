const sort = (arr) => {
    let sorted = [];
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        let countIndex = 0;
        for (let j = 0; j < arr.length; j++) {
            const comparingNum = arr[j];
            if (num == comparingNum) {
                continue;
            } else if (num > comparingNum) {
                countIndex++;
            }
        }
        sorted[countIndex] = num;
    }
    return sorted;
}

console.log(sort([14,2,1,12]));
