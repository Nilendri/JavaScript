function multiply(num){
    return num*5
}

multiply.power=5
console.log(multiply(5));
console.log(multiply.power);
console.log(multiply.prototype);

function createUser(name,score){
    this.name=name
    this.score=score
}
createUser.prototype.increment=function(){
    this.score++
}
createUser.prototype.printMe=function(){
    console.log(`price is ${this.score}`);
}
const chai=new createUser("chai",25)
const tea=createUser("tea",250) 
chai.printMe() 
chai.increment()
// console.log(chai);
// console.log(cre ateUser("chai",120)); //output:undefined;
