// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');
const Choices = require('inquirer/lib/objects/choices');
// TODO: Create an array of questions for user input
const questions = [
    'What is your Name?', 
    'Title of Project? ', 
    'Brief Description: ',
    'Include which of the following?', 
    'Choose a license', 
    'What year for the license?',
    'What are the steps required to install your project?',
    'Provide instructions and examples for use.',
    'List your collaborators.'
];
const licenseChoices = [
    'MIT License', 
    'GNU GPLv3', 
    'Apache', 
    'None'
];
const readmeChoices = [
    'Table of Contents', 
    'Installation', 
    'Usage', 
    'Credits', 
    'License', 
    'Badges', 
    'Features', 
    'Contributing', 
    "Tests"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(fileName);
    console.log(data);
    fs.writeFile(`${data.title}.md`, generateMarkdown(data), (err) => 
    err ? console.log(err) : console.log('it works'));
}
inquirer.prompt([
    {
        type: 'input',
        name: "username",
        message: questions[0]
    },
    {
        type: 'input',
        name: "title",
        message: questions[1]
    },
    {
        type: 'input',
        name: "description",
        message: questions[2]
    },
    {
        type: 'checkbox',
        name: 'checkbox',
        message: questions[3],
        choices: readmeChoices
    },
    {
        type: 'list',
        name: 'licenseType',
        message: questions[4],
        choices: licenseChoices,
        when: (data) => (data.checkbox).includes('License')
    },
    {
        type: 'input',
        name: "licenseYear",
        message: questions[5],
        when: (data) => (data.checkbox).includes('License')
    },
    {
        type: 'input',
        name: "installation",
        message: questions[6],
        when: (data) => (data.checkbox).includes('Installation')
    },
    {
        type: 'input',
        name: "usage",
        message: questions[7],
        when: (data) => (data.checkbox).includes('Usage')
    },
    {
        type: 'input',
        name: "credits",
        message: questions[8],
        when: (data) => (data.checkbox).includes('Credits')
    }
]).then((data) => {
    writeToFile(data.title, data);
});






// TODO: Create a function to initialize app
// function init() {
    
// }

// // // Function call to initialize app
// init();

