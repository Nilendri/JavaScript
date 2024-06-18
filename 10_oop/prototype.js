const info={
    username:"Nilendri",
    age:19,
    getSpiderPower:function(){
        console.log(`spider power is ${this.username}`);
    }
}
Object.prototype.asha=function(){
    console.log("Asha here");
}
// info.asha()
const arr=[1,2,3]
Array.prototype.hey=function(){
    console.log("Im here");
}
arr.asha()
arr.hey()
// info.hey() //Error


const user={
    name:"chai",
    email:"chai@google.com"
}
const teacher={
    teach:true
}
const teaching={
    isAvailable:false
}
const TASupport={
    makeAssignment:'JS',
    fullTime:true,
    __proto__:teaching
}
teacher.__proto__=user

//Modern syntax
Object.setPrototypeOf(teacher,user) //in this now teacher have authority to have access all properties of user object

const str="asha   "
String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`true length is ${this.trim().length}`);
}

str.trueLength()
"nilendri  ".trueLength()