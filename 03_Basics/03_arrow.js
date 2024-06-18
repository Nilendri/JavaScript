const user={
    username:"Nilendri",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username} is here`); //this keyword is use to call the current context
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username="asha"
// user.welcomeMessage()
// console.log(this);

//this keyword is only used in object not in function

let name="nilendri"
function one() {
    const username="Nilendri"
    console.log(this);
}
// one()
// ()=>{} //declaration of arrow function
const two=()=>{
    const username = "Nilendri";
    console.log(this);
}
// two()

// const addtwo=(num1,num2)=>{
//     return num1+num2
// }  // this is basic arrow function or explicitly arrow

// const addtwo = (num1, num2) => num1 + num2;
// const addtwo=(num1,num2)=> (num1+num2) //implicitly arrow function
const addtwo=()=> ({username: "Nilendri"})
console.log(addtwo());
console.log(addtwo(2,2));

