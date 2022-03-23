const fs = require('fs');
const inquirer = require(`inquirer`);

// Team Profiles
const Engineer = require(`./lib/Engineer`);
const Manager = require(`./lib/Manager`);
const Intern = require(`./lib/Intern`);

// Profile Card Creator
const profileTemplate = require(`./src/template`)
const employeeArray = [];

// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

const enterManager = () => {
    return inquirer.prompt([{
            type: `input`,
            name: `name`,
            message: `Who is the team manager?`,
        },

        {
            type: `input`,
            name: `id`,
            message: `What is team manager's employee ID number?`,
        },

        {
            type: `input`,
            name: `email`,
            message: `What is team manager's email?`,
        },

        {
            type: `input`,
            name: `officeNumber`,
            message: `What is team manager's Office Number?`,
        },
    ])

    .then(managerProfile => {
        const { name, id, email, officeNumber } = managerProfile;
        const manager = new Manager(name, id, email, officeNumber);

        employeeArray.push(manager);
        console.log(manager);

    })

}

// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team

const addEmployee = () => {
    return inquirer.prompt([{
            type: `list`,
            name: `role`,
            message: `What type of employee would you like to add?`,
            choices: [`Engineer`, `Intern`]
        },

        {
            type: `input`,
            name: `name`,
            message: `Who is the employee?`,
            // when: (input) => input.role === `Intern` || `Engineer`,
        },

        {
            type: `input`,
            name: `id`,
            message: `What is the employee's ID number?`,
            // when: (input) => input.role === `Intern` || `Engineer`,
        },

        {
            type: `input`,
            name: `email`,
            message: `What is the employee's email?`,
            // when: (input) => input.role === `Intern` || `Engineer`,
        },

        // WHEN I select the engineer option
        // THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
        {
            type: `input`,
            name: `github`,
            message: `What is the employee's github username?`,
            when: (input) => input.role === `Engineer`,
        },

        // WHEN I select the intern option
        // THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
        {
            type: `input`,
            name: `school`,
            message: `What is the employee's school?`,
            when: (input) => input.role === `Intern`,
        },

        // WHEN I decide to finish building my team
        // THEN I exit the application, and the HTML is generated
        {
            type: `confirm`,
            name: `confirmAddition`,
            message: `Would you like to add more team members?`,
        },

    ])

    .then(employeeProfiles => {

        let { name, id, email, role, github, school, confirmAddition } = employeeProfiles
        let employee;

        if (role === `Engineer`) {
            employee = new Engineer(name, id, email, github);
            console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern(name, id, email, school);

            console.log(employee);
        }

        employeeArray.push(employee);

        if (confirmAddition) {
            return addEmployee(employeeArray);
        } else {
            return employeeArray;
        }
    })

};

const writefile = data => {
    fs.writeFile(`./dist/index.html`, data, (err) =>
        err ? console.log(err) : console.log(`Successfully created Profile Page`)
    )
};

enterManager()
    .then(addEmployee)
    .then(employeeArray => {
        return profileTemplate(employeeArray);
    })
    .then(data => {
        return writefile(data);
    })
    .catch(err => {
        console.log(err);
    });