const myArr = [1, 2, 3, 4, 5];
// console.log(myArr[0]);
myArr.push(6);
console.log(myArr);
// myArr.pop()
// myArr.unshift(9)
// myArr.shift()
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));
// console.log(myArr);

const myArr2 = new Array(1, 2, 3); //Another way to declare an array
const newArr = myArr.join(); //to convert the array into string
console.log(newArr);
const Arr = ["a", "s", "h", "a"];
const newArr1 = Arr.join(); //convert the array to string
console.log(Arr);
console.log(newArr1);

const myn1 = myArr.slice(1, 3); //it does not effect the original array
console.log("A", myArr);
console.log(myn1);

const myn2 = myArr.splice(1, 3); //it effect the original array
console.log("B", myArr);
console.log(myn2);

const str = "asha";

const arr = [1, 2, 3];
arr.push(4);
console.log(arr);
