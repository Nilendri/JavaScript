//forEach loop is the prototype of array.It will not return any value

const coding=['js','cpp','java']
coding.forEach( function(item){
    // console.log(item);
} )

coding.forEach( (item)=>{
    // console.log(item);
} )

function printme(item) {
    // console.log(item);
}
coding.forEach(printme)

coding.forEach( function(item,index,arr){
// console.log(item,index,arr);
} )

const language=[
    {
        name:"javascript",
        shotform:"js"
    },
    {
        name:"pytho",
        shotform:"py"
    },
    {
        name:"cshrp",
        shotform:"c#"
    }
]
language.forEach( function(item){
    console.log(item.name);
} )