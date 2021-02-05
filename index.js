// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = ['Title of Project? ', 'Brief Description: '];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    inquirer.prompt([
        {
            type: 'input',
            name: "title",
            message: questions[0]
        },
        {
            type: 'input',
            name: "description",
            message: questions[1]
        }
    ]).then((data) => {
        console.log(data);
    })
}

// TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
writeToFile();
