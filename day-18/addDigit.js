const addDigit = (num) => {
    const numStr = num.toString();
    let newNumStr = ""
    for (let i = 0; i < numStr.length; i++) {
        const numAdding = (parseInt(numStr[i])+1).toString();
        newNumStr+=numAdding;
    }
    console.log(newNumStr);
}

addDigit(998)