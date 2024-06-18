class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Username ${this.username}`);
    }
    static createID(){
        return 123;
    }
}
const chai=new User("Asha")
chai.logMe()
// console.log(chai.createID());  //Error
class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}
const phone=new Teacher("phone","phone@gmail.com")
// phone.createID();   //Error