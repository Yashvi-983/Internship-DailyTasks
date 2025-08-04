// In JavaScript, the this keyword refers to an object.
//The this keyword refers to different objects depending on how it is used

//this in a method
const person = {
    firstname: 'John',
    lastname: 'Smith',
    age: 32,
    Fullname: function (){
        return this.firstname + ' ' + this.lastname;
    }
}
console.log(person.Fullname())

//this in a function
function greet(){
    console.log('Hello , My name is ', this.name)
}

const person1 = {
    name: 'Amit',
    sayHello : greet
}

greet()
person1.sayHello()




