const mysym=Symbol("key1")

const JsUser={
    name:"Nilendri",
    [mysym]:"key2",
    age:18,
    email:"nil@gmail.com",
    "location":"Mumbai",
}

// console.log(JsUser.email);
// console.log(JsUser["email"]); //Right way to declare the keys of objects
// console.log(JsUser["location"]);
// console.log(JsUser[mysym]);//Interview perspective...if i want to declare the symbol in object as a keys.
JsUser.email="nilendri@gmail.com"
// Object.freeze(JsUser)  //Want to lock your object
JsUser.email="nil7360@gmail.com"
// console.log(JsUser);
JsUser.greeting=function(){
    console.log("Hello world");
}

JsUser.greeting2 = function () {
  console.log(`hello everyone,${this.name}`);
};
console.log(JsUser.greeting());
console.log(JsUser.greeting2());