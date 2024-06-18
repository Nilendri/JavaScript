//for in loop is specially use for object

const obj={
    name:"Nilendri",
    age:18
}
for (const key in obj) {
    // console.log(`${key}:-${obj[key]}`);
}

const str="Hello world"
for (const key in str) {
    // console.log(str[key]);
}

const arr=['a','s','h','a']
for (const key in arr) {
    // console.log(arr[key]);
}

const map = new Map();
map.set("IN", "India");
map.set("USA", "United State Of America");
for (const key in map) {
    console.log(key);
}