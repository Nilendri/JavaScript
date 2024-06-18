// const tinder=new Object()  //singleton
const tinder={}  //non sigleton
tinder.name="Nilendri"
tinder.age=18
// console.log(tinder);

const regularUser={
    email:"nile@gmail.com",
    fullname:{
        Userfullname:{
            firstname:"Nilendri",
            lastname:"Samantara",
        }
    }
}
// console.log(regularUser.fullname.Userfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3 = { 5: "c", 6: "d" };
// const obj=Object.assign({},obj1,obj2,obj3) //shallow copy of original object not reference
const obj={...obj1,...obj2,...obj3}
// console.log(obj);

const user = [
  {
    id: 3,
    email: "nile@gmail.com",
  },
  {
    id: 3,
    email: "nil@gmail.com",
  },
  {
    id: 3,
    email: "nil@gmail.com",
  },
];
// console.log(user[0].email)
// console.log(tinder);
// console.log(Object.keys(tinder));//it returns keys in an array form
// console.log(Object.values(tinder));//it returns values in an array form
// console.log(Object.entries(tinder));
// console.log(tinder.hasOwnProperty('age1'));

// *******************************de-structure***************************************
const course={
    coursename:"JS",
    courseinstructor:"Hitesh"
}
const{courseinstructor:instructor}=course //This is de structure
// console.log(courseinstructor);
console.log(instructor);