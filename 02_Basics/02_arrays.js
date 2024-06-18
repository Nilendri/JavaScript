const marvel_heros=["spiderman","ironman","thor"]
const dc_heros=["superman","batman","flash"]

// marvel_heros.push(dc_heros)  //it push into existing array
// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);

const all_heros=marvel_heros.concat(dc_heros) //it returns new array
// console.log(all_heros);

const all_new_heros=[...marvel_heros,...dc_heros] //Another method for combining two arrays
// console.log(all_new_heros);

const another_Arr=[1,2,3,[4,5],[6,[7,8,9]]]
const real_another_Arr=another_Arr.flat(Infinity)
// console.log(real_another_Arr);

console.log(Array.isArray("Nilendri"));
console.log(Array.from("Nilendri"));
console.log(Array.from({name:"nilendri"}));
let score1=100
let score2=200
console.log(Array.of(score1,score2));


// const new1=Array.from(marvel_heros)
// console.log(new1);
// console.log(marvel_heros);
const new1=marvel_heros.slice()
console.log(new1);

const new2=marvel_heros.concat()
console.log(`new 2 ${new2}`);