const score=100
// console.log(score);
// console.log(typeof score);

const newnum=new Number(100)
// console.log(newnum);
// console.log(newnum.toString().length);

const othernum=123.89
console.log(othernum.toPrecision(3));

const hundred=100000
console.log(hundred.toLocaleString('en-IN'));

// ***********************Maths********************************
console.log(Math);
console.log(Math.PI);
console.log(Math.abs(-10));
console.log(Math.round(4.5));
console.log(Math.ceil(4.4));
console.log(Math.floor(4.6));
console.log(Math.random());
console.log(Math.random()*10);
console.log((Math.random() * 10)+1);
console.log(Math.floor(Math.random() * 10 + 1));

const min=10
const max=20
console.log(Math.floor(Math.random() * (max - min + 1))+min);