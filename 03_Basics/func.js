// function one() {
//   const username = "Nilendri";
//   function two() {
//     const website = "youtube";
//     console.log(username);
//   }

//   two();
// }
// one();

// function two() {
//     let name="Nilendri"
//     console.log("Hello world");
//     console.log(this.name);
// }
const two = () => {
  let name = "Nilendri";
  console.log("Hello world");
  console.log(this.name);
};
two(4);
