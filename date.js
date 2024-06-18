let myDate=new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());

// let mycreateDate=new Date(2024,4,8,5,2);
// console.log(mycreateDate.toLocaleString());
let mycreateDate=new Date("08-01-2024")
// console.log(mycreateDate.toLocaleString());

let myTime=Date.now()
// console.log(myTime);
// console.log(mycreateDate.getTime());
// console.log(Math.floor(Date.now() / 1000));

let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth());
newDate.toLocaleString('default',{
    weekly:"long",
})