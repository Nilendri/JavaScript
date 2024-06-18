const user={
    _email:"email",
    _password:"abc",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email=value
    }

}

const tea=Object.create(user)
console.log(user.email);