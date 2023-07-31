const necklace = (word1, word2) => {
    if (word1.length !== word2.length) {
        return false;
    } else if (word1 === word2) {
        return true;
    }
    for (let counter = 0; counter < word1.length; counter++) {
        if (word1 != word2) {
            let char = word1[0];
            word1 = word1.slice(1)+char;
            // console.log(char);
            // console.log(word1);
        } else {
            return true;
        }
        
    }
    return false;
}

console.log('nicole, icolen =>', necklace("nicole","icolen" ));
console.log('nicole, lenico =>', necklace("nicole","lenico" ));
console.log('nicole, coneli =>', necklace("nicole","coneli" ));
console.log('aabaaaaabaab, aabaabaabaaa =>', necklace("aabaaaaabaab","aabaabaabaaa" ));
console.log('abc, cba =>', necklace("abc","cba" ));
console.log('xxyyy, xxxyy =>', necklace("xxyyy","xxxyy" ));
console.log('xyxxz, xxyxz =>', necklace("xyxxz","xxyxz" ));
console.log('x, x =>', necklace("x","x" ));
console.log('x, xx =>', necklace("x","xx" ));
console.log('x, "" =>', necklace("x",'""' ));
console.log('"", "" =>', necklace("","" ));
