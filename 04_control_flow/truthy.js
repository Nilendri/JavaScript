const usermail = {};
if (usermail) {
  console.log("User have email");
} else {
  console.log("Dont have email");
}

//Falsy value
//false,0,-0,BigInt 0n,null,undefined,""
// Truthy value
//" ",'false','0',[],{},function(){}

const Arr = [];
if (Arr.length === 0) {
  console.log("Empty Array");
}

if (Object.keys(usermail).length === 0) {
  console.log("Object is empty");
}

// nullish coalescing operator(??):null undefined
//it is use to return the default value for variable if it is null or undefined and if it is falsy value then it will not return default value.
// const val='false'??10  //output:-false

const val = 5 ?? 10; //output:-5

// const val=null??10  //output:-10
console.log(val);

// ternary operator
// condition ? expressionIfTrue : expressionIfFalse;
const price = 100;
// price<=50?console.log("Less than 50"):console.log("More than 50");
price >= 50 ? console.log("More than 50") : console.log("Less than 50");
