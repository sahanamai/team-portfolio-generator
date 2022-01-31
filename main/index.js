const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const generateHTML = require('./src/page-template.js')

const teamMembers = [];
const idArray = [];
//manager ques- name,id,email,office number
//engineer-name,id,email,gihub
//add employee-engineer,intern,dont want to add any employee
//intern-name, id,e-mail,school.
//manager
function managerQue() {
  inquirer.prompt([
    {
      type: 'input',
      message: "What is manager name?",
      name: 'managerName'
    },
    {
      type: 'input',
      message: "What is manager Id?",
      name: 'managerId'
    },
    {
      type: 'input',
      message: 'What is manager E-mail?',
      name: 'managerEmail'
    },
    {
      type: 'input',
      message: 'What is manager office number?',
      name: 'officeNumber'
    },
  ])

    .then((response) => {
      console.log(response);
     teamMembers.push(new Manager(response));
      employeeQue();
    });
};
//engineer
function engineerQue() {
  inquirer.prompt([
    {
      type: "input",
      name: "EngineerName",
      message: "What is the engineer's name?"
    },
    {
      type: "input",
      name: "EngineerId",
      message: "What is the engineer's ID?"
    },
    {
      type: "input",
      name: "EngineerEmail",
      message: "What is the engineer's email?"
    },
    {
      type: "input",
      name: "EngineerGithub",
      message: "What is the engineer's GitHub username?"
    }
  ]).then((response) => {
    console.log(response);
    teamMembers.push(new Engineer(response));
      employeeQue();
    });

};
//add employee
function employeeQue() {
  inquirer.prompt([
    {
      type: "list",
      name: "memberChoice",
      message: "Which type of member would you like to add?",
      choices: [
        "Engineer",
        "Intern",
        "I don't want to add any more Employees"
      ]
    }
  ]).then((response) => {
    console.log(response);
   if(response.memberChoice=="Engineer"){
     engineerQue();
    
   }
   else if(response.memberChoice=="Intern"){
    internQue();  
   }
   else{
    fs.writeFile('./sampleindex.html', generateHTML(teamMembers) , (err) =>
    err ? console.log(err) : console.log('response written to index.html'))
    console.log(teamMembers);

   }
  });
};
//intern
function internQue() {
  inquirer.prompt([
    {
      type: "input",
      name: "InternName",
      message: "What is the intern's name?"
    },
    {
      type: "input",
      name: "InternId",
      message: "What is the intern's ID?"
    },
    {
      type: "input",
      name: "InternEmail",
      message: "What is the intern's email?"
    },
    {
      type: "input",
      name: "InternSchool",
      message: "What is the intern's school?"
    }
  ]).then((response) => {
    console.log(response);
    teamMembers.push(new Intern(response));
    employeeQue();
  });
};
managerQue();
