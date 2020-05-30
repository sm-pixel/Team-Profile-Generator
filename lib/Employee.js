// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    //method to get name
    getName() {
        return this.name;
    }
    //method to get id
    getId() {
        return this.id;
    }
    //method to get email
    getEmail() {
        return this.email;
    }
    //method to get role
    getRole() {
        return "Employee";
    }
}

module.exports = Employee
