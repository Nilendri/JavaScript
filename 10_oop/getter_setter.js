class User{
    constructor(password,email){
        this.password=password
        this.email=email
    }
    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email=value
    }
    get password(){
        //return this._password.toUpperCase();
        return `${this._password}hii`
    }
    set password(value){
        this._password=value
    }
}

const chai=new User("abc","nil@.com")
console.log(chai.password);
console.log(chai.email);