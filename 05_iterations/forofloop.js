// for of loop is specially apply for Array

const arr=[1,2,3,4,5]
for (const val of arr) {
    // console.log(val);
}

const str="hello world"
for (const val of str) {
    // console.log(val);
    if (val===" ") {
        break;
    }
}


// for...of loop not apply on Object
// const obj={
//     name:"Nilendri",
//     age:18
// }
// for (const key of obj) {
//     console.log(key);
// }

const map=new Map()
map.set('IN','India')
map.set('USA','United State Of America')
// console.log(map);
for (const [key,val] of map) {
    console.log(`${key}-${val}`);
}