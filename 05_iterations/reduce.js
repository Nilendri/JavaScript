const arr = [1, 2, 3];
// const total=arr.reduce(function(acc,currval){
// return acc+currval
// },0)

// const total = arr.reduce((acc, currval) => {
//   return acc + currval;
// }, 0);
// console.log(total);

const shoppingCart = [
  {
    itemName: "py Course",
    price: 1999,
  },
  {
    itemName: "py Course",
    price: 1999,
  },
  {
    itemName: "py Course",
    price: 1999,
  },
  {
    itemName: "py Course",
    price: 1999,
  },
];

const total=shoppingCart.reduce((acc,item)=> acc+item.price,0)
console.log(total);