// forEach loop is not return type
//filter is return the value

// const coding = ["js", "cpp", "java"];
// const arr=coding.forEach( (item)=>{
//     // console.log(item);
//     return item
// } )
// console.log(arr);

const number=[1,2,3,4,5,6,7,8,9,10]
const arr=number.filter( (num)=> {
    return num>4
})
// console.log(arr);

//if we want to perform this using foreach loop:-
const newnumber=[]
number.forEach( (num)=>{
    if (num>4) {
        newnumber.push(num);
    }
} )
// console.log(newnumber);

const Books = [
  {
    title: "Book one",
    genre: "Non-fiction",
    publish: 1995,
    edition: 2010,
  },
  {
    title: "Book two",
    genre: "fiction",
    publish: 2000,
    edition: 2011,
  },
  {
    title: "Book three",
    genre: "Science",
    publish: 1999,
    edition: 2013,
  },
  {
    title: "Book four",
    genre: "fiction",
    publish: 2010,
    edition: 2023,
  },
  {
    title: "Book five",
    genre: "History",
    publish: 1998,
    edition: 2000,
  },
  {
    title: "Book six",
    genre: "Science",
    publish: 2002,
    edition: 1998,
  }
];
let user=Books.filter((bk)=>bk.genre==='Science')
user=Books.filter((bk)=>{
    return bk.publish>=2000 && bk.genre==='fiction'
})
console.log(user);