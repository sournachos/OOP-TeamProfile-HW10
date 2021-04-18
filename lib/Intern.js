const Employee = require('./Employee')

class Intern extends Employee{
    constructor(name, id, email, school){
       this.school = school;

       super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
    }
        getRole(){return "Intern";}
            getSchool(){return this.school}
}
module.exports = Intern;