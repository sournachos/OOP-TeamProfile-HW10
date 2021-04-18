const Employee = require('./Employee')

class Engineer extends Employee{
    constructor(name, id, email, github){
       this.github = github;

       super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
    }
        getRole(){return "Engineer";}
            getGithub(){return this.github}
}
module.exports = Engineer;