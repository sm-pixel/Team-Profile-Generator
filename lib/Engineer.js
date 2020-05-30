//This class should inherit from Employee.
const Employee = require("./Employee");
//use engineer extends employee
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    //method to get github
    getGithub() {
        return this.github;
    };
    //method to get role
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer
