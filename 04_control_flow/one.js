// const temperature=40
// if(temperature>40){
//     console.log("Temperature is less than 50");
// }
// else{
//     console.log("Temperature is greater than 50");
// }

// const score=100
// if (score>50) {
//     let power="High"
//     console.log(power);
// }
// console.log(power);

const balance=900
// if(balance>100) console.log("test"),console.log("Test2"); //Aisa nahi likhna
// if (balance<500) {
//     console.log("Less than 500");
// }else if (balance<750) {
//     console.log("Less than 750");
// }else if (balance==900) {
//     console.log("Equal to 900");
// }else{
//     console.log("no match found");
// }

const userloggedIn=true
const debitcard=true
const loggedInfromGoogle=false
const loggedInfromEmail=true
if (userloggedIn && debitcard) {
    console.log("Allow to buy");
}
if (loggedInfromGoogle || loggedInfromEmail) {
    console.log("User logged in");
}