// primitive datatypes:-String,Number,Boolean,undefined,null,BigInt,Symbol
let str="ab"
let num1=100
let num2=100.9
let value=true
let undefinedvalue;
console.log(typeof undefinedvalue);
let nullvalue=null
console.log(typeof nullvalue);
let number=13854629457295823n
const id=Symbol('132')
const another=Symbol('132')
console.log(id===another);


// reference/Non-primitive datatypes:-Array,Function,Object
const hero=["Dhruvi","kav","riddhi"]
let obj1={
    name:"asha",
    age:18,
}
const myfunc=function(){
    console.log("hello world");
}
console.log(typeof myfunc);