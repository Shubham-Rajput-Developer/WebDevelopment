// function makePerson(name,age){
//     const person = {
//         name : name,
//         age : age,
//         talk(){
//             console.log(`Welcome ${this.name}`);
//         }
//     }
//     return person;
// }

// function person(name,age){
//     this.name = name,
//     this.age = age
// }
// person.prototype.talk = function(){
//     console.log(`Welcome ${this.name}`);
// }

class person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    talk(){
        console.log(`Welcome ${this.name}`);
    }
}
class student extends person{
    constructor(name,age,marks){
        super(name,age);
        this.marks = marks;
    }
    greet(){
        console.log(`Hi, i am ${this.name}`);
    }
}
let s1 = new student("shubham",20,90);
let s2 = new student("Om",19,89);