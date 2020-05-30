const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const team = [];
//choose role function to prompt questions for each role
function chooseRole() {
    inquirer.prompt([
        {
            name: "role",
            type: "list",
            message: "What is your role?",
            choices: ["Manager", "Engineer", "Intern"]
        }
    ])
        .then(function (data) {
            //if role = manager
            if (data.role === "Manager") {
                inquirer.prompt([
                    {
                        name: "name",
                        type: "input",
                        message: "What is your name?"
                    },
                    {
                        name: "id",
                        type: "input",
                        message: "What is your employee ID number?"
                    },
                    {
                        name: "email",
                        type: "input",
                        message: "What is your email address?"
                    },
                    {
                        name: "officeNumber",
                        type: "input",
                        message: "What is your office number?"
                    }
                ])
                    .then(function (data) {
                        const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
                        team.push(manager);
                        addEmployee();
                    })
            }
            //if role = engineer
            if (data.role === "Engineer") {
                inquirer.prompt([
                    {
                        name: "name",
                        type: "input",
                        message: "What is your name?"
                    },
                    {
                        name: "id",
                        type: "input",
                        message: "What is your employee ID number?"
                    },
                    {
                        name: "email",
                        type: "input",
                        message: "What is your email address?"
                    },
                    {
                        name: "github",
                        type: "input",
                        message: "What is your GitHub username?"
                    }
                ])
                    .then(function (data) {
                        const engineer = new Engineer(data.name, data.id, data.email, data.github);
                        team.push(engineer);
                        addEmployee();
                    })
            }
            //if role = intern
            if (data.role === "Intern") {
                inquirer.prompt([
                    {
                        name: "name",
                        type: "input",
                        message: "What is your name?"
                    },
                    {
                        name: "id",
                        type: "input",
                        message: "What is your employee ID number?"
                    },
                    {
                        name: "email",
                        type: "input",
                        message: "What is your email address?"
                    },
                    {
                        name: "school",
                        type: "input",
                        message: "What college are you currently attending?"
                    }
                ])
                    .then(function (data) {
                        const intern = new Intern(data.name, data.id, data.email, data.school);
                        team.push(intern);
                        addEmployee();
                    })
            }
        })
}
//Prompt to add more empoyees or finish
function addEmployee() {
    inquirer.prompt([
        {
            name: "newEmp",
            type: "list",
            message: "Are there any more employees?",
            choices: ["Yes", "No"]
        }
    ])
    .then(function(data) {
        if (data.newEmp === "Yes") {
            chooseRole();
        } else {
            createTeam(team)
        }
    })
}
//Create html with team members data
function createTeam() {
    fs.writeFileSync(outputPath, render(team), "utf-8")
}
chooseRole();