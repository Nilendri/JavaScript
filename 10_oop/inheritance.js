class User{
    constructor(username){
        this.username=username
    }
    print(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }
    addCourse(){
        console.log(`A new course added by ${this.username}`);
    }
}

const chai=new Teacher("Asha","asha@gmail.com","123")
chai.addCourse()
chai.print();
const tea=new User('Tea')
tea.print();
// tea.addCourse();
console.log(chai instanceof User);