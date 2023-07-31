// The Mission: The Necklace

const matchNecklace = (x, y) => {
    let index = 1;
    while((y.includes(x.substr(0, index)) && index <= y.length)) {
      console.log(x.substr(0, index));
  
      // does "coleni" include "[n]icole" - true
      // does "coleni" include "[ni]cole" - true
      // does "coleni" include "[nic]ole" - false
  
      // does "xxxyy" include "[x]xyyy" - true
      // does "xxxyy" include "[xx]yyy" - true
      // does "xxxyy" include "[xxy]yy" - true
      // does "xxxyy" include "[xxyy]y" - true
      // does "xxxyy" include "[xxyyy]" - false
  
      index++
    }
  
    console.log(index);
  
    console.log((x.substr(index - 1)));
    console.log((x.substr(0, index - 1)));
    console.log(`${x.substr(index - 1)}${x.substr(0, index - 1)}`);
  
    return y === `${x.substr(index - 1)}${x.substr(0, index - 1)}`;
  }
  
  // console.log(matchNecklace("nicole", "coleni"));
  console.log(matchNecklace("xxyyy", "xxxyy"));