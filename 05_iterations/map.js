const numbers=[1,2,3,4,5,6,7,8,9]
const nums=numbers.map((num)=>num+10)
// console.log(nums);

//This is called chain method where we use multiple method at the same time
const nums1=numbers
            .map((num)=>num*10)
            .map((num)=>num+1)
            .filter((num)=>num>=40)
console.log(nums1);
//using forEach
// const arr=[]
// numbers.forEach((num)=>{
//     arr.push(num+10)
// })
