function addnum(num1, num2) {
  const result = num1 + num2;
  return result;
}
// console.log(addnum(2,3))
const result = addnum(2, 3);
// console.log(result);

function usermessage(username) {
  if (username === undefined) {
    console.log("Please enter user name");
    return;
  }
  return `${username} logged in`;
}
// console.log(usermessage("Nilendri"));
// console.log(usermessage());

function calculatecart(val1, ...num1) {
  return num1;
}
// console.log(calculatecart(200, 300, 400));

//Object in function
const user = {
  username: "Nilendri",
  price: 200,
};
function handleobject(anyobject) {
  // console.log(`Username is ${anyobject.username} price is ${anyobject.price}`);
  // console.log(`Username is ${this.username} price is ${this.price}`); //undefined
}
handleobject(user)
// Create object instead of call
handleobject({
  username: "Asha",
  price: 100,
});

//Array in function
const newArray = [100, 200, 300];
function handleArray(getArray) {
  return getArray[1];
}
// console.log(handleArray(newArray));
// console.log(handleArray([200,300,400]));









function name() {
  console.log("Hello world");
  console.log(num1);
}
const name1 = () => {
  console.log("Hello");
  console.log(num2);
};
// name(8);
// name1(10);

// let myArrowFunction = () => {
//     console.log("arguments");
// }

// myArrowFunction("argument1", "argument2"); // Output: Uncaught ReferenceError: arguments is not defined