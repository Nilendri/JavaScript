var c=40
if (true) {
    const a=10
    let b=20
    var c=30
    // console.log(a);
}
// console.log(c);

let num=3
function one() {
  const username = "Nilendri";
  function two() {
    const website = "youtube";
    console.log(username);
  }

  two();
}
one();

// console.log(one())

if (true) {
    const username="Nilendri"
    if (username==="Nilendri") {
        const website="youtube"
        console.log(username+website);
    }
    // console.log(website);
}
// console.log(username);

console.log(one(5))
function one(num) {
    return num+1
}

// two(5)
const two =  (num)=> {
  return num + 2;
};
// const two= function (num){
//     return num+2
// }


//Hoisting
// console.log(x);//undefined
// var x=10;
// console.log(x);