//Promise Create
const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async is completed");
    resolve();
  }, 1000);
});

//Promise Consumed
promiseOne.then(function () {
  console.log("resolve connected");
});


//Another way in which we can create and consume promise at the same time
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task two');
        resolve()
    },1000)
}).then(function(){
console.log("Resolve connected sucessfully");
})

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Nilendri",age:19})
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
})

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        if (!error) {
            resolve({ username: "Nilendri", age: 19 });
        }else{
            reject("ERROR:404");
        }
    } ,1000)
})
promiseFour
  .then(function (user) {
    console.log(user);
    return user.username;
  })
  .then(function (name) {
    console.log(name);
  })
  .catch(function (er) {
    console.log(er);
  }).finally(()=>
    console.log('The promise is either resolved or reject')
)

const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        if (!error) {
            resolve({ username: "Nilendri", age: 19 });
        }else{
            reject("ERROR:404");
        }
    } ,1000)
})
async function consumePromise(){
    try {
        const consume = await promiseFive;
        console.log(consume);
    } catch (error) {
        console.log(error);
    }
}
consumePromise()

async function getAllUsers(){
    try {
        const data = await fetch("https://randomuser.me/api/");
        const response = await data.json();
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
getAllUsers()

fetch("https://randomuser.me/api/")
.then((resolve)=>{
    return resolve.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))