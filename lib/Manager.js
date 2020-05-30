//This class should inherit from Employee.
const Employee = require("./Employee");
//use manager extends employee
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    };
    //method get office number
    getOfficeNumber() {
        return this.officeNumber;
    };
    //method get role
    getRole() {
        return "Manager";
    }
}

module.exports = Manager