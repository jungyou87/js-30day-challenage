
function unmultiple() {
    let count = 0;
    for (let i = 1; i <= 200; i++) {
        if (i%6 == 0) {
            continue;
        } else if (i%15 == 0) {
            continue;
        } else {
            count++;
        }
    }
    return count;
}

console.log(unmultiple());