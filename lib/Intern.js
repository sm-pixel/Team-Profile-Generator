//This class should inherit from Employee.
const Employee = require("./Employee");
//use intern extends employee
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    };
    //method to get school
    getSchool() {
        return this.school;
    };
    //method to get role
    getRole() {
        return "Intern";
    };
}

module.exports = Intern