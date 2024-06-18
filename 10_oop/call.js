function SetUsername(username){
    this.username=username
}
function createUser(username,email,password){
    SetUsername.call(this,username)
    // this.username=username
    this.email=email
    this.password=password
}

const user=new createUser('Nilendri',"nil@fb.com",'123')
console.log(user);

class User{
    constructor(username,email,password){
        this.username=username
        this.email=email
        this.password=password
    }
    Mypassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}
const chai=new User("Chai","chai@gmail.com","123")
console.log(chai.Mypassword());
console.log(chai.changeUsername());

//Behind the scene
function Users(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}
Users.prototype.Mypassword=function(){
    return `${this.password}abc`;
}
Users.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};
const tea = new Users("tea", "tea@gmail.com", "123");
console.log(tea.Mypassword());
console.log(tea.changeUsername());