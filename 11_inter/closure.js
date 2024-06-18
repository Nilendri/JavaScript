// function outer() {
//   const username = "Nilendri";
//   //console.log(score);
//   function innerOne() {
//     console.log("innerOne", username);
//     const score = 12;
//   }
//   function innerTwo() {
//     console.log("innerTwo", username);
//     //console.log(score);
//   }
//   innerOne();
//   innerTwo();
// }
// outer();

//closure

function func(){
    const username="mozila"
    function inner(){
        console.log(username);
    }
    return inner
}
const Myfunc=func()
Myfunc()
