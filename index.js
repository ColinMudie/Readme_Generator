// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');
const Choices = require('inquirer/lib/objects/choices');
const validator = require('validator');
// TODO: Create an array of questions for user input
const readmeChoices = [
    'Table of Contents', 
    'Installation', 
    'Usage', 
    'Credits', 
    'License',  
    'Features',  
    'Tests',
    'User Story'
];

const licenseChoices = [
    'MIT License', 
    'GNU GPLv3', 
    'Apache', 
    'None'
]

const questions = [
    {
        type: 'input',
        name: "username",
        message: 'What is your full name?'
    },
    {
        type: 'input',
        name: "github",
        message: 'What is your Github username?'
    },
    {
        type: 'input',
        name: "email",
        message: 'What is your email address?',
        validate: function (email)
        {
            return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
        }
    },
    {
        type: 'input',
        name: "title",
        message: 'Title of Project?'
    },
    {
        type: 'input',
        name: "description",
        message: 'Brief Description:'
    },
    {
        type: 'checkbox',
        name: 'checkbox',
        message: 'Include which of the following?',
        choices: readmeChoices
    },
    {
        type: 'input',
        name: 'userStoryAsA',
        message: 'User Story: AS A: ',
        when: (data) => (data.checkbox).includes('User Story')
    },
    {
        type: 'input',
        name: 'userStoryIWant',
        message: 'User Story: I WANT: ',
        when: (data) => (data.checkbox).includes('User Story')
    },
    {
        type: 'input',
        name: 'userStorySoThat',
        message: 'User Story: SO THAT: ',
        when: (data) => (data.checkbox).includes('User Story')
    },
    {
        type: 'list',
        name: 'licenseType',
        message: 'Choose a license',
        choices: licenseChoices,
        when: (data) => (data.checkbox).includes('License')
    },
    {
        type: 'input',
        name: "licenseYear",
        message: 'What year for the license?',
        when: (data) => (data.checkbox).includes('License')
    },
    {
        type: 'input',
        name: "installation",
        message: 'What are the steps required to install your project?',
        when: (data) => (data.checkbox).includes('Installation')
    },
    {
        type: 'input',
        name: "usage",
        message: 'Provide instructions and examples for use.',
        when: (data) => (data.checkbox).includes('Usage')
    },
    {
        type: 'input',
        name: "credits",
        message: 'List your collaborators.',
        when: (data) => (data.checkbox).includes('Credits')
    },
    {
        type: 'input',
        name: "features",
        message: 'What are some of the features included in your program?',
        when: (data) => (data.checkbox).includes('Features')
    },
    {
        type: 'input',
        name: "tests",
        message: 'List any tests you wish to share',
        when: (data) => (data.checkbox).includes('Tests')
    },
];
;


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(fileName);
    console.log(data);
    fs.writeFile(`README.md`, generateMarkdown(data), (err) => 
    err ? console.log(err) : console.log('it works'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile(data.title, data);
    });
}

// // Function call to initialize app
init();

