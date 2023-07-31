function junk(str) {
    let newStr = ""
    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        if ( char == '[' 
        || char == ']' 
        || char == '<' 
        || char == '>' 
        || char == '{' 
        || char == '}' 
        || char == '('
        || char == ')' 
        || char == '!' 
        ) {
            newStr = newStr.concat(" ");
        } else {
            newStr = newStr.concat(char);
        }
    
    }
    return newStr;
}

console.log(junk('[#(AS]D(DF)SDF>AS<ASDF{AS#}F!SDF'));
