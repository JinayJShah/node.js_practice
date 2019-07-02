// let x=;
// let url = "http://mylogger.io/log";

// function log(message){
//     //sent an http request
//     console.log(message)
// }
// module.exports.log = log;

// const person = {
//     name:'jinay',
//     age: 22
// };

// module.exports = person;


class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    greeting(){
        console.log(`my name is ${this.name} and i am ${this.age}`)
    }
}

module.exports = Person;