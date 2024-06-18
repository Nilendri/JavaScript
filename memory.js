// stack(primitive), heap(Non-primitive)
// in stack we get the copy of the first one,so if we change the value of one varible then it cannot be affect the value of another variable
// in heap we get the reference,so if we change the value of one variable then automatically it will change the value of another variable

let channel="nilchannel"
let channel1=channel
channel1="ashachannel"
console.log(channel);
console.log(channel1);


//Interview perspective
let obj1={
    email:"nil@gmail.com",
}
let obj2=obj1
obj2.email="asha@gmail.com"
console.log(obj1);
console.log(obj2);
