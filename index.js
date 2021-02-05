// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');
const Choices = require('inquirer/lib/objects/choices');
// TODO: Create an array of questions for user input
const questions = ['What is your Name?', 'Title of Project? ', 'Brief Description: ', 'Choose a license', 'What year for the license?'];

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
        type: 'list',
        name: 'licenseType',
        message: questions[3],
        choices: ['MIT License', 'GNU GPLv3', 'Apache', 'None']
    },
    {
        type: 'input',
        name: "licenseYear",
        message: questions[4]
    }
]).then((data) => {
    writeToFile(data.title, data);
});






// TODO: Create a function to initialize app
// function init() {
    
// }

// // // Function call to initialize app
// init();

