// ex1
const ex1 = () => {
    return 'Hello Radness'
}

console.log(ex1());

//ex2
const ex2 = (arrOfInt) => {
    return arrOfInt.reduce((acc, cur)=>{
        return acc+cur
    },0)
}

console.log(ex2([2,4,6]));

//ex3

const Animal = function (animal, sound, delay) {
    this.animal = animal,
    this.sound = sound;
    this.delay = delay;
    this.greet = () => {
        setTimeout(function() {
            console.log(`Hi, I am a ${this.animal}...${this.sound}`);
          }.bind(this), this.delay);
    }
};
  
const dog = new Animal('Dog', 'Bark', 3000);
const cat = new Animal('Cat', 'Meow', 200);
  
dog.greet();
cat.greet();
  
  