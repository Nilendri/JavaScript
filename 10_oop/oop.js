const user={
    username:"Nilendri",
    age:19,
    signedIn:true,
    getUserDetail:function(){
        // console.log("Get users details from database");
        // console.log(this.username);
        console.log(this);
    }
}
// console.log(user.username);
// console.log(user.getUserDetail());

function User(username,age,signedIn){
    this.username=username
    this.age=age
    this.signedIn=signedIn

    this.greeting=function(){
        console.log(`${this.username}`);
    }

    return this //not necessary
}
const UserOne=new User("Nilendri",19,true)
const UserTwo=new User("Asha",18,false)
console.log(UserOne);
// console.log(UserTwo);

// console.log(UserOne.constructor);
//output:[Function: User]

//1.new keyword create a new object
//2.constructor function call througth new keyword and in this whatever argument you pass it returns them
//3.this keyword inject all arguments
//4.Returns our function